import React, { Component } from 'react';
import './User.css';

class UserList extends Component {
    render() {
        const { users } = this.props;

        return (
            <div className="user-list">
                {users.map(user => (
                    <div key={user.grid} className="user-card">
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>City: {user.city}</p>
                        <p>Courses:</p>
                        <ul>
                            {user.course.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default UserList;