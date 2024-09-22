import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (location.state) {
      setName(location.state.name);
      setPhone(location.state.phone);
      setEmail(location.state.email);
      setCourse(location.state.course);
      setStatus(location.state.status);
    }
  }, [location]);

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
    const updatedRecord = record.map((rec) => {
      if (rec.userId === location.state.userId) {
        rec.name = name;
        rec.phone = phone;
        rec.email = email;
        rec.course = course;
        rec.status = status;
      }
      return rec;
    });

    localStorage.setItem("users", JSON.stringify(updatedRecord));
    alert("User updated successfully");
    navigate("/");
  };

  return (
    <div align="center">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <table border="1">
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>
              <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} required />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="text" onChange={(e) => setPhone(e.target.value)} value={email} required />
            </td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>
              {["html", "css", "bootstrap", "js", "reactjs", "nodejs", "php", "angular", "python", "laravel"].map((c) => (
                <label key={c}>
                  <input type="checkbox" onChange={(e) => handleCourseChange(e.target.checked, c)} checked={course.includes(c)} /> {c}
                </label>
              ))}
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
              <input type="submit" value="Update" />
            </td>
          </tr>
        </table>
      </form>
      <Link to="/">View Users</Link>
    </div>
  );
};

export default Edit;
