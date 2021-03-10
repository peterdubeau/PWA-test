import React, { useState, useEffect } from 'react'
import pests from '../../pests'
import logo from '../../Assets/logo.png'
import './Forms.css'

export default function Forms() {

  const [formData, setFormData] = useState({
    clientFirstName: '',
    clientLastName: '',
    email: '',
    phone: '',
    additionalNotes: ''
  })

  const [pest, setPest] = useState('')

  const [query, setQuery] = useState('')
  const [queryResults, setQueryResults] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value })
    console.log(queryResults)
  }


  const loadPest = (input) => (e) => {
    let result = pests.filter(pest => pest.name === input)
    setPest(...result)
    setQuery('')
  }

  const findPest = (e) => {
    setQuery(e.target.value)
    e.preventDefault()
  }

  
  useEffect(() => {
    let pestName = pests.map(pest => pest.name)
    const results = pestName.filter(pest =>
      pest.toLowerCase().includes(query.toLowerCase())
    );
    setQueryResults(results)
  }, [query])

  return (<div style={{ display: "flex", flexDirection: "column"}}>
    <img src={logo} alt="logo" className="logo"/>
    <form key="form">
      <label key="form-data">
        <p>First Name:
          <input
              key="first-input"
              placeHolder= "First Name"
              type="text"
              name="clientFirstName"
              value={formData.clientFirstName}
              onChange={handleChange}
          />
        </p>
        <p key="last" >Last Name: 
          <input
            key="last-input"
            placeHolder="Last Name"
            type="text"
            name="clientLastName"
            value={formData.clientLastName}
            onChange={handleChange}
          />
        </p>
        <p key="pest">Pest: 
          <input
            placeHolder="Search Pest"
            key="pest-input"
            type="text"
            name="pest"
            value={formData.pest}
            onChange={findPest}
          />
        </p>
          <div className="pest-results-container">
        {query.length === 0 ? " " : 
          queryResults.map(item => 
            <option
              key={item}
              onClick={loadPest(item)}
              className ="pest-results"
              >
                {item}
              </option>
              )}
            </div>
        <br />
        {/* <button>Submit</button> */}
      </label>
    </form>

    <div className="pest-info-container">
      {
        pest === "" ? "" :
          <div className="pest-info">
            <h3 style={{ textAlign: "center" }} key={pest.name}>{pest.name}</h3>
            <img src={pest.imageUrl} className="pest-image" alt={pest.name} key="pest-image"/>
            <p key="size">Size: {pest.size}</p>
            <p key="hd">Hit Dice: {pest.hitDice}</p>
            <p key="notes">Notes: {pest.notes}</p>
          </div>
      }
    </div>
  </div>)
}
