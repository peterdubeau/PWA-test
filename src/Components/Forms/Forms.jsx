import React, { useState } from 'react'
import pests from '../../pests.json'

export default function Forms() {
  const [formData, setFormData] = useState({
    clientFirstName: '',
    clientLastName: '',
    email: '',
    phone: '',
    additionalNotes: '',
    pest: ''
  })

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
          onChange={handleSearch}
        />
        <br />
      <button onClick ={handleSubmit}>Submit</button>
      </label>
    </form>
  )
}
