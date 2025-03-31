renderApp();
function renderApp() {
    const app = document.getElementById('app');
  
    function Scoreboard() {
      const [player, setPlayer] = React.useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
      });
  
      function handlePlusClick() {
        setPlayer(prevPlayer => ({
          ...prevPlayer,
          score: prevPlayer.score + 1
        }));
      }
  
      function handleFirstNameChange(e) {
        setPlayer(prevPlayer => ({
          ...prevPlayer,
          firstName: e.target.value
        }));
      }
  
      function handleLastNameChange(e) {
        setPlayer(prevPlayer => ({
          ...prevPlayer,
          lastName: e.target.value
        }));
      }
  
      return (
        <>
          <label>
            Score: <b>{player.score}</b>
            {' '}
            <button onClick={handlePlusClick}>
              +1
            </button>
          </label>
          <br /><br />
          <label>
            First name:
            <input
              value={player.firstName}
              onChange={handleFirstNameChange}
            />
          </label>
          <label>
            Last name:
            <input
              value={player.lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </>
      );
    }
  
    const root = ReactDOM.createRoot(app);
    root.render(<Scoreboard />);
  }
  