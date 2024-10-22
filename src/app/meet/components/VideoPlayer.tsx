import { ForwardedRef, forwardRef } from "react";

interface VideoPlayerProps {
  localVideoRef: ForwardedRef<HTMLVideoElement>;
  remoteVideoRef: ForwardedRef<HTMLVideoElement>;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ localVideoRef, remoteVideoRef }, ref) => {
    return (
      <div className="flex space-x-4">
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          className="w-1/2 bg-gray-900"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="w-1/2 bg-gray-900"
        />
      </div>
    );
  }
);

export default VideoPlayer;
