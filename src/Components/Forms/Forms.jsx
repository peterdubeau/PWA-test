import React, {useState} from 'react'

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
    const { name, value } = e.currentTarget;
    console.log(value)
    setFormData({ ...formData, [name]: value })
    e.preventDefault()
  }

  const handleSubmit = () => {

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
        <br />
      <button onClick>Submit</button>
      </label>
    </form>
  )
}
