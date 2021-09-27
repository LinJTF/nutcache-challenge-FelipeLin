import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDetails from './pages/EmployeeDetails';
import EmployeeEdit from './pages/EmployeeEdit';
import CreateEmployee from './pages/CreateEmployee';



const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={EmployeeDetails} />
                <Route exact path="/edit/:id" component={EmployeeEdit} />
                <Route exact path="/create" component={CreateEmployee} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

