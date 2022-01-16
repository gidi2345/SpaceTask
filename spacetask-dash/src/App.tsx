import './App.css';
import {useRequest} from "./useRequest.hook";

function App() {
  const data = useRequest('https://angry-stonebraker-21425c.netlify.app/.netlify/functions/addresses', {
    type: 'ADD_ADDRESS',
    payload: { address: 'gan yavne'}
  })
  return (
    <div className="App">
      <div style={{width:50,height:50, backgroundColor: 'grey'}} onClick={() => {
            console.log(data);
      }}>
      <div>

      </div>
      </div>
    </div>
  );
}

export default App;
