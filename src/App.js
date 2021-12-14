import React, { useState, useEffect } from "react"
import './styles/App.scss'
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DetailsPage from "./pages/DetailsPage"
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { firebase } from './services/firebase'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedUser(user)
    } else {
      setLoggedUser(null)
    }
  })

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
          {
            loggedUser ?
              <>
                <Header userName={loggedUser?.displayName} userEmail={loggedUser?.email} />
                <Route path="/" exact component={HomePage} />
                <Route path="/details" component={DetailsPage} />
              </>
              :
              <Route path="/" component={LoginPage} />
          }
        </Switch>
      </Router>

    </div>
  );
}

export default App;
