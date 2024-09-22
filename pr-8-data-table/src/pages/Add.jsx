import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [status, setStatus] = useState("inactive");
  const [date, setDate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);

  const handleCourseChange = (checked, c) => {
    let all = [...course];
    if (checked) {
      all.push(c);
    } else {
      all = all.filter(val => val !== c);
    }
    setCourse(all);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Math.floor(Math.random() * 10000);
    const obj = {
      userId,
      name,
      email,
      password,
      phone,
      gender,
      course,
      status,
      date
    };

    const newRecord = [...record, obj];
    setRecord(newRecord);
    localStorage.setItem("users", JSON.stringify(newRecord));
    alert("User added successfully");
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setGender("");
    setCourse([]);
    setStatus("inactive");
    setDate("");
  };

  return (
    <div align="center">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <table border="1">
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>
              <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} required />
            </td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <label><input type="radio" value="male" onChange={(e) => setGender(e.target.value)} name="gender" /> Male</label>
              <label><input type="radio" value="female" onChange={(e) => setGender(e.target.value)} name="gender" /> Female</label>
            </td>
          </tr>
          <tr>
            <td>Courses:</td>
            <td>
              {["html", "css", "bootstrap", "js", "reactjs", "nodejs", "php", "angular", "python", "laravel"].map((c) => (
                <label key={c}>
                  <input type="checkbox" onChange={(e) => handleCourseChange(e.target.checked, c)} /> {c}
                </label>
              ))}
            </td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>
              <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required />
            </td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>
              <select onChange={(e) => setStatus(e.target.value)} value={status}>
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
      <Link to="/">View Users</Link>
    </div>
  );
};

export default Add;
