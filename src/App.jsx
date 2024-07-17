import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title='Easy' targetTime={1}></TimerChallenge>
      <TimerChallenge title='Not easy' targetTime={3}></TimerChallenge>
      <TimerChallenge title='Getting Tough' targetTime={10}></TimerChallenge>
      <TimerChallenge title='Pros Only' targetTime={15}></TimerChallenge>
    </>
  );
}

export default App;
