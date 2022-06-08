import { Fragment } from 'react';
import './app.css';

function App() {
  const name = 'yk';
  return (
    <Fragment>
      <h1>Hello :)</h1>
      {name &&  <h1>Hi {name}</h1>}
      {
        ['🎈', '🍋'].map(item => 
        <h1>{item}</h1>)
      }
     
    </Fragment>
    
  );
}

export default App;
