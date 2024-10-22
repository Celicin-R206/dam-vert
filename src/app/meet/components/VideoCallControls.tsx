interface CallControlsProps {
  startCall: () => void;
  hangUp: () => void;
}

const CallControls = ({ startCall, hangUp }: CallControlsProps) => {
  return (
    <div className="mt-4">
      <button
        onClick={startCall}
        className="bg-blue-500 text-white py-2 px-4 mr-4">
        Rejoindre le meeting
      </button>
      <button onClick={hangUp} className="bg-red-500 text-white py-2 px-4">
        Hang Up
      </button>
    </div>
  );
};

export default CallControls;
