import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponenet from './components/CreateEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';


function App() {
  return (
   
  
    <div>
            <Router>
                <div className="container">
                    <HeaderComponent/>
                    <div className="container">
                       
                        <Routes>
                            <Route path="/" element={<ListEmployeeComponent/>}/>
                            <Route path="/employee" element={<ListEmployeeComponent/>}/>
                            <Route path="/add-employee" element={<CreateEmployeeComponenet/>}/>
                            <Route path="/update-employee/:id" element={<UpdateEmployee/>}/>
                            <Route path="/view-employee/:id" element={<ViewEmployee/>}/>
                        </Routes>
                    </div>
                    <FooterComponent/>
                </div>
            </Router>
        </div>
  );
}

export default App;
