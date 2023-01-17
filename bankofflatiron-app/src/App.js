import './App.css';
import GetReceipts from './component/receipts';
import AddReceipt from './component/addReceipts';

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>BANK OF FLATIRON</h1>
      </header>
      <AddReceipt/>
      <GetReceipts/>
    </div>
  );
}

export default App;