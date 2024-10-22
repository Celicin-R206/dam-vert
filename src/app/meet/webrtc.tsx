"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CallControls from "./components/VideoCallControls";

const VideoCallPage = () => {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [peerConnection, setPeerConnection] =
    useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://10.5.50.159:8000/ws/video/room1/");

    setSocket(ws);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleSignalData(data.message);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error : ");
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    if (peerConnection?.signalingState === "closed") {
      console.warn("PeerConnection already closed, creating a new one.");
      setPeerConnection(null);
    }

    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    pc.onicecandidate = (event) => {
      if (event.candidate && socket) {
        socket.send(
          JSON.stringify({
            candidate: event.candidate,
          })
        );
      }
    };

    pc.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    navigator.mediaDevices?.getUserMedia
      ? navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            if (pc.signalingState !== "closed") {
              stream.getTracks().forEach((track) => pc.addTrack(track, stream));
            }
            if (localVideoRef.current) {
              localVideoRef.current.srcObject = stream;
            }
          })
          .catch((error) => {
            console.error("Error accessing media devices.", error);
          })
      : console.error("getUserMedia is not supported in this browser.");

    setPeerConnection(pc);

    return () => {
      pc.close();
    };
  }, [socket]);

  const handleSignalData = async (data: any) => {
    if (!peerConnection) return;

    if (data.type === "offer") {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(data)
      );
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket?.send(
        JSON.stringify({ message: peerConnection.localDescription })
      );
    } else if (data.type === "answer") {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(data)
      );
    } else if (data.type === "candidate") {
      await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
  };

  const startCall = async () => {
    if (!peerConnection || !socket) return;
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.send(JSON.stringify({ offer: offer }));
  };

  const hangUp = () => {
    if (peerConnection) {
      peerConnection.close();
      setPeerConnection(null);
      socket?.send(JSON.stringify({ message: { type: "hangup" } }));
    }
  };

  return (
    <div>
      <VideoPlayer
        localVideoRef={localVideoRef}
        remoteVideoRef={remoteVideoRef}
      />
      <CallControls startCall={startCall} hangUp={hangUp} />
    </div>
  );
};

export default VideoCallPage;
