import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.css"

import ListView from "./ListView.js"
import Contact from "./Contact.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ListView} />
        <Route path="/contact/:id" component={Contact} />
      </div>
    </Router>
  )
}

export default App
