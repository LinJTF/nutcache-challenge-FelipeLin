import React, { useEffect, useState } from 'react';
import EmployeeService from "../../services/employee";
import { Link } from 'react-router-dom';

import './forms.css';

const Forms = ({ values, id }) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('male');
    const [email, setEmail] = useState('');
    const [cpf, setCPF] = useState('');
    const [startDate, setStartDate] = useState('');
    const [team, setTeam] = useState('Front-end');

    const handleChangeName = e => setName(e.target.value);
    const handleChangeDate = e => setBirthday(e.target.value);
    const handleChangeGender = e => setGender(e.target.value);
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangeCPF = e => setCPF(e.target.value);
    const handleChangeStartDate = e => setStartDate(e.target.value);
    const handleChangeTeam = e => setTeam(e.target.value);
    
    const handleSubmit = e => {
        if (values) {
            EmployeeService.updateEmployee(id, {
                name,
                birthday,
                gender,
                email,
                cpf,
                startDate,
                team
            });
            document.location.reload();
            alert('Employee has been updated');
        }

        else {
            EmployeeService.createNewEmployee({
                name,
                birthday,
                gender,
                email,
                cpf, 
                startDate,
                team
            });
            alert('Employee has been created');
        }    
        
        e.preventDefault();    
    }

    useEffect(() => {
        if (values) {
            const { name, birthday, gender, email, cpf, startDate, team } = values;
            setName(name);
            setBirthday(birthday);
            setGender(gender);
            setEmail(email);
            setCPF(cpf);
            setStartDate(startDate);
            setTeam(team);
        }  
    }, [values]);


    return (
       <div className="container-forms">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>
                        <input onChange={handleChangeName} type="text" placeholder="Name" value={name}/>
                    </label>
                    <label>
                        <input onChange={handleChangeDate}type="date" placeholder="Birthday" value={birthday}/>
                    </label>
                    <label>
                        <select onChange={handleChangeGender} value={gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label>
                        <input onChange={handleChangeEmail} type="text" placeholder="Email" value={email}/>
                    </label>
                    <label>
                        <input onChange={handleChangeCPF} type="text" placeholder="CPF" value={cpf}/>
                    </label>
                    <label>
                        <input onChange={handleChangeStartDate} type="month" pattern="[0-9]{4}-[0-9]{2}" value={startDate}/>
                    </label>
                    <label>
                        <select onChange={handleChangeTeam} placeholder="Team" value={team}>
                            <option value="front-end">Front-end</option>
                            <option value="back-end">Back-end</option>
                            <option value="mobile">Mobile</option>
                            <option value=""></option>
                        </select>
                    </label>
                </div>
                <button className="send-button" type="submit">
                    Submit
                </button>
                <Link to="/">Home</Link>
            </form>
       </div> 
    );
}

export default Forms;