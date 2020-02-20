import React from "react"
import "./ListView.css"
import data from "./data.json"
import { Link } from "react-router-dom"

function ListView() {
  return (
    <div className="container">
      <h3 className="myPeeps">My Peeps</h3>
      {data.map(contact => (
        <Link to={`/contact/${contact.id}`}>
          <div className="listPeeps">
            <img className="thumbPeeps" src={contact.picture.thumbnail} />
            <p className="capitalize">
              {contact.name.first} {contact.name.last}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListView
