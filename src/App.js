import "./App.css";
import { Navbar } from './component';
import {  RoutesPath } from './routes/RoutesPath';


function App() {
  return (
    <div className="App">
       <Navbar/>
     <RoutesPath/>
    </div>
  );
}

export default App;
