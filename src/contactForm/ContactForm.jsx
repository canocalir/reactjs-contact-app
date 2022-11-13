import React from "react";

const ContactForm = ({setInfo, info}) => {
    const {username, phoneNumber, gender} = info
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInfo({...info, [name]: value})
    }
  return (
    <form>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input onChange={handleChange} value={username} name="username" type="text" className="form-control" id="username" />
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
      <input onChange={handleChange} value={phoneNumber} name="phoneNumber" type="text" className="form-control" id="phoneNumber" />
    </div>
    <select onChange={handleChange} value={gender} name="gender" className="form-select"> 
        <option >Female</option>
        <option >Male</option>
        <option >Other</option>
      </select>
    <button type="submit" className="btn btn btn-outline-light mt-3">Submit</button>
  </form>
  );
};

export default ContactForm;
