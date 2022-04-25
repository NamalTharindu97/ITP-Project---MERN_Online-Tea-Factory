
import './App.css';
import AddEmployee from './components/AddEmployee';
import Header from './components/Header';
import AllEmployee from './components/AllEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import UpdateForm from './components/UpdateForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
<Router>
        <Header/>
        
        
        <Routes>
          
          <Route path='/add' exact element={<AddEmployee/>}/>
          <Route path='/all' exact element={<AllEmployee/>}/>
          <Route path='/delete' exact element={<DeleteEmployee/>}/>
          <Route path='/update' exact element={<UpdateEmployee/>}/>
          <Route path='/update/:id' exact element={<UpdateForm/>}/>
        
        </Routes>




</Router>
    
  );
}

export default App;

