import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Discount from "./compoent/Discount"
import Graph from "./compoent/Graph"
import Message from "./compoent/Message"
import Notification from "./compoent/Notification"
import Settings from "./compoent/Settings"
import LogOut from "./compoent/LogOut"
import "./App.css"
import Basket from "./compoent/Basket"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' component={Home } exact>
            <Home />
          </Route>
          <Route path='/discount' component={Discount} exact>
            <Discount />
          </Route>
          <Route path='/graph' component={Graph} exact>
            <Graph />
          </Route>
          <Route path='/message' component={Message} exact>
            <Message />
          </Route>
          <Route path='/notification' component={Notification} exact>
            <Notification />
          </Route>
          <Route path='/settings' component={Settings} exact>
            <Settings />
          </Route>
          <Route path='/logout' component={LogOut} exact>
            <LogOut/>
          </Route>
        </Switch>

        <Basket />
      </Router>
    </div>
  )
}

export default App
