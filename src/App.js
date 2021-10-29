import {BrowserRouter as Router,Route,Switch,useHistory} from "react-router-dom";
import './App.css';
import {useState} from 'react';
import Login from './components/Login/Index';
import UserList from './components/UserList/Index';

function App() {
 const [authorized,setAuthorized] = useState(false);
  let history = useHistory();
  return (
    // <div className="App">
    //   {/* <Login/> */}
    //   {/* <UserList/> */}
    //   <
    // </div>

    <Router>
      <Switch>
        <Route exact path="/" component={()=><Login setAuthorized={setAuthorized} authorized={authorized}/>}/>
        <Route exact path="/userlist" component={()=><UserList authorized={authorized}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
