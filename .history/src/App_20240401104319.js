import './App.css';
import Game from './components/Game';
import SimpleGame from './components/SimpleGame';

function App() {
  return (
    <div className="App">
      <div className="App-header">


        <section>
          <h2>Matriz</h2>
          <Game />

        </section>

        <section>
          <h2>Simple</h2>

          <SimpleGame />
        </section>
      </div>
    </div>
  );
}

export default App;
