import React from 'react';
import './App.css';
import EmployeeList from './Employee';

const App = () => {
    const employee = [
        {
            empid: 1,
            empname: "abc",
            empemail: "abc@gmail.com",
            empphone: 12345,
            empaddress: {
                country: "india",
                state: "gujarat",
                city: "surat",
                area: "motavarachha"
            },
            empdeg: "junior",
            empsalary: 23000,
            empdepartment: "ui/ux"
        },
        {
            empid: 2,
            empname: "def",
            empemail: "def@gmail.com",
            empphone: 2121,
            empaddress: {
                country: "india",
                state: "rajasthan",
                city: "jaipur",
                area: "jaipurabc"
            },
            empdeg: "junior",
            empsalary: 21000,
            empdepartment: "web design"
        },
        {
            empid: 3,
            empname: "ghi",
            empemail: "ghi@gmail.com",
            empphone: 2212,
            empaddress: {
                country: "india",
                state: "maharashtra",
                city: "pune",
                area: "abcpune"
            },
            empdeg: "senior",
            empsalary: 65000,
            empdepartment: "backend developer"
        },
        {
            empid: 4,
            empname: "jkl",
            empemail: "jkl@gmail.com",
            empphone: 212112,
            empaddress: {
                country: "india",
                state: "karnataka",
                city: "bengaluru",
                area: "kgf"
            },
            empdeg: "tl",
            empsalary: 150000,
            empdepartment: "frontend developer"
        }
    ];

    return (
        <div className="App">
            <h1>Employee List</h1>
            <EmployeeList employees={employee} />
        </div>
    );
};

export default App;
