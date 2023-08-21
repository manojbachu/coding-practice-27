import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
