import React from "react"
import data from "./data.json"
import { FaArrowLeft } from "react-icons/fa"
import { MdPerson } from "react-icons/md"
import { MdEmail } from "react-icons/md"
import { IoIosPhonePortrait } from "react-icons/io"
import { TiWorld } from "react-icons/ti"
import "./contact.css"
import { Link } from "react-router-dom"

function Contact(props) {
  const id = props.match.params.id

  const contact = data.find(contact => contact.id === Number(id))

  return (
    <div class="singleViewContainer">
      <div className="leftArrow">
        {" "}
        <Link to="/">
          <FaArrowLeft />
        </Link>
      </div>
      <div className="imageWrapper">
        <img
          className="largeImage"
          src={contact.picture.large}
          alt="largerPic"
        />
      </div>
      <div>
        <p className="contactInfo capitalize">
          <MdPerson /> {contact.name.first} {contact.name.last}
        </p>

        <p className="contactInfo">
          <MdEmail /> {contact.email}
        </p>

        <p className="contactInfo">
          <IoIosPhonePortrait /> {contact.cell}
        </p>

        <p className="contactInfo capitalize">
          <TiWorld /> {contact.location.city}, {contact.location.state}
        </p>
      </div>
    </div>
  )
}

export default Contact
