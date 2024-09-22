import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const View = () => {
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let updatedRecords = [...record];

    // Apply filtering
    if (search !== "") {
      updatedRecords = updatedRecords.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    if (sort === "asc") {
      updatedRecords.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "dsc") {
      updatedRecords.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Apply status filter
    if (status) {
      updatedRecords = updatedRecords.filter(user => user.status === status);
    }

    setFiltered(updatedRecords);
  }, [search, sort, status, record]);

  return (
    <div align="center">
      <h2>View Users</h2>
      <select onChange={(e) => setSort(e.target.value)} value={sort}>
        <option value="">Sort by</option>
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
      </select>

      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">Filter by Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <input 
        type="text" 
        placeholder="Search by name" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search} 
      />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.course.join(", ")}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => navigate("/edit", { state: user })}>Edit</button>
                <button
                  onClick={() => {
                    const updatedRecords = record.filter((rec) => rec.userId !== user.userId);
                    setRecord(updatedRecords);
                    localStorage.setItem("users", JSON.stringify(updatedRecords));
                    alert("User deleted successfully");
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/add">Add New User</Link>
    </div>
  );
};

export default View;

