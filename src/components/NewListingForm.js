import { useState } from 'react'

export default function NewListingForm({ postListing }) {
  const [formObj, setFormObj] = useState({
    description: "",
    location: "",
    image: ""
  })
  const updateForm =(e) => setFormObj({...formObj, [e.target.name]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault();
    postListing(formObj);
  }
  return (
    <form className="newListingFrom" onSubmit={handleSubmit}>
      <label>Description:</label>
      <input onChange={updateForm} name="description" value={formObj.description} />
      <label>Location:</label>
      <input onChange={updateForm} name="location" value={formObj.location} />
      <label>Image:</label>
      <input onChange={updateForm} name="image" value={formObj.image} />
      <button type="submit">Submit</button>
    </form>
  )
}
