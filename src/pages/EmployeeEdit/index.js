import React, { useState, useEffect } from 'react';
import EmployeeService from "../../services/employee";
import { useParams } from 'react-router-dom';

import Forms from '../../components/Forms';
import './employeeEdit.css';



function EmployeeEdit() {

    const { id } = useParams();
    const [response, setResponse] = useState({});


    useEffect(() => {
        (async function getEmployees() {
            const resp = await EmployeeService.getEmployeesById(id);
            setResponse(resp);
        })();
    }, [id])



    return (
        <div>
            <Forms values={response} id={id}/>
        </div>
  );
}

export default EmployeeEdit;