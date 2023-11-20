import React from "react";

const Forms = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Enter Your Full Name:</label>
        <input
          className="fullName"
          id="fullName"
          type="text"
          placeholder="e.g. Omar Nayfeh"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label htmlFor="userName">Enter Your User Name:</label>
        <input
          className="userName"
          id="userName"
          type="text"
          placeholder="e.g. onayfeh"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />

        <label htmlFor="email">Enter Your Email:</label>
        <input
          className="email"
          id="email"
          type="text"
          placeholder="e.g. nayfeho@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="address">Enter Your Address:</label>
        <input
          className="address"
          id="address"
          type="text"
          placeholder="e.g. 1121 Hill Lane"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber">Enter Your Phone Number:</label>
        <input
          className="phoneNumber"
          id="phoneNumber"
          type="text"
          placeholder="e.g. 586-586-5865"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <button type="sumbit"> Sumbit</button>
      </form>
    </div>
  );
};

export default Forms;
