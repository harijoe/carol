import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import '../../scss/style.scss';
import { Link } from "react-router";

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
