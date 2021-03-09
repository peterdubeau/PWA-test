import React, { useState, useEffect } from 'react'
import pests from '../../pests.json'

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
  }

  const handleSearch = (e) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value })
    return pests.find(item => pests.name === item)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const loadPest = (input) => {
    let result = pests.filter(pest => pest.name === input)
    console.log(input)
    setPest(...result)
  }

  const findPest = (e) => {
    setQuery(e.target.value)
    e.preventDefault()
  }

  let pestName = pests.map(pest => pest.name)

  useEffect(() => {
    const results = pestName.filter(pest => pest.includes(query)
    );
    setQueryResults(results)
  }, [query])

    // console.log(pest)
  return (
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
          <p>{item}</p>
          )}
        <br />
        <button onClick={loadPest}>Submit</button>
      </label>
    </form>
  )
}
