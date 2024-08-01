import './App.css';
import Data from './Component/Data';
import EmData from "./Component/Context";
import { useState } from 'react';
import Show from './Component/Show';

function App() {
  const [EmpData,setEmpData]=useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  return (
    <div>
    <EmData.Provider value={{EmpData, setEmpData, CurrentPage ,setCurrentPage}}>
       <Data/>
       <Show />
       </EmData.Provider>
    </div>  
  );
}

export default App;
