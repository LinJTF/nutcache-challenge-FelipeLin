import React, { useEffect, useState } from 'react';
import EmployeeService from "../../services/employee";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './employeeDetails.css';

function Forms() {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [startDate, setStartDate] = useState('');
    const [team, setTeam] = useState('');

    useEffect(() => {
        (async function getEmployees() {
            const { name, birthday, gender, email, cpf, startDate, team } = await EmployeeService.getEmployeesById(id);
            setName(name);
            setBirthday(birthday);
            setGender(gender);
            setEmail(email);
            setCPF(cpf);
            setStartDate(startDate);
            setTeam(team);
        })();
    }, [])

    return (
        <>
            <div className="container">
                <ul>
                    <li>Name: { name }</li>    
                    <li>Birthday: { birthday }</li>    
                    <li>Gender: { gender }</li>    
                    <li>Email: { email }</li>    
                    <li>CPF: { cpf }</li>    
                    <li>Start date: { startDate }</li>    
                    <li>Team: { team }</li>    
                </ul>  
                <Link className="buttonHome" to="/">Home</Link>  
            </div>
        </>
    );
}

export default Forms;