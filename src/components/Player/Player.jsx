import { useRef } from 'react';

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();
  const stop = () => playerRef.current.load();
  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default Player;
