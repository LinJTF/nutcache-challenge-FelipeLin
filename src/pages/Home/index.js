import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from "../../services/employee";

import './home.css';

function Home() {

    const [employees, setEmployees] = useState([]);
    const [aux, setAux] = useState([]);

    useEffect(() => {
        (async function getEmployees() {
            const response = await EmployeeService.getAllEmployees();
            //console.log(response);
            setEmployees(response)
        })();
    }, [])

    const handleDelete = (id) => {
        (async function deleteEmployee() {
            await EmployeeService.deleteEmployee(id);
            const response = await EmployeeService.getAllEmployees();
            //console.log(response);
            setEmployees(response)
            //setAux('');
        })();      
    }

    return (
        <>
            <div className="homePage">
                {employees.map(({ _id, name, email, startDate, team }) => {
                    return (
                        <div className="row-employee"> 
                            <article key={_id}>
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                                <p>Start date: {startDate}</p>
                                <p>Team: {team}</p>
                                <Link to={`/edit/${_id}`}>Edit</Link>
                                <Link to={`/details/${_id}`}>Details</Link>
                                <button onClick={() => { if (window.confirm('Are you sure you wish to delete this employee?')) handleDelete(_id)}}>Delete</button>
                            </article>
                        </div>
                    )
                })} 
                <Link className="createHome" to="/create">Create new employee</Link>    
            </div>
        </>
    );
}

export default Home;