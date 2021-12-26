import './App.css';
import Navigation from './components/Navigation';
import {Route, Switch} from 'react-router-dom'
import ContactList from './components/ContactList';
import Login from './components/Login';
import AddContactForm from './components/AddContactForm';
import ContactView from './components/ContactView';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path='/contacts/add' component={AddContactForm}></Route>
        <Route path='/contacts/:id' component={ContactView}></Route>
        <Route path='/contacts' component={ContactList}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
