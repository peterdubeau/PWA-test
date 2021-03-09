import React, { useState, useEffect } from 'react'
import pests from '../../pests.json'
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

  // const handleSearch = (e) => {
  //   const { name, value } = e.currentTarget;
  //   setFormData({ ...formData, [name]: value })
  //   return pests.find(item => pests.name === item)
    
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const loadPest = (input) => (e) => {
    let result = pests.filter(pest => pest.name === input)
    setPest(...result)
  }

  const findPest = (e) => {
    setQuery(e.target.value)
    e.preventDefault()
  }

  let pestName = pests.map(pest => pest.name)

  useEffect(() => {
    const results = pestName.filter(pest =>
      pest.toLowerCase().includes(query.toLowerCase())
    );
    setQueryResults(results)
  }, [query])

  console.log(pest)

  return (<>
    <form>
      <label>
        <p>First Name:</p><input
          type="text"
          name="clientFirstName"
          value={formData.clientFirstName}
          onChange={handleChange}
        />
        <p>Last Name:</p><input
          type="text"
          name="clientLastName"
          value={formData.clientLastName}
          onChange={handleChange}
        />
        <p>Pest:</p><input
          type="text"
          name="pest"
          value={formData.pest}
          onChange={findPest}
        />
        {query.length === 0 ? " " : queryResults.map(item => 
          <p onClick={loadPest(item)}>{item}</p>
          )}
        <br />
        <button>Submit</button>
      </label>
    </form>

    <div className="pest-info-container">
      {pest === "" ? "" : <div className="pest-info">
        <p style={{ textAlign: "center" }}>{pest.name}</p>
        <img src={pest.imageUrl} className="pest-image"/>
        <p>Size: {pest.size}</p>
        <p>Hit Dice: {pest.hitDice}</p>
        <p>Notes: {pest.notes}</p>
        </div>}
    </div>
  </>)
}
