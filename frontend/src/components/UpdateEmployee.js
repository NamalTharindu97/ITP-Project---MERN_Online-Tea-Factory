import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../App.css";


export default function AllEmployee() {

const [employees, setEmployees] = useState([]);

useEffect(() => {
    function getEmployees(){
        axios.get("http://localhost:8070/employee/").then((res) => {
            setEmployees(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }
    getEmployees();

}, [])




    return(
        <div className="container4">


<table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee_ID</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Marital_Status</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Employee_Type</th>
                    <th scope="col">DELETE</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {employees.map(post => (
                    <tr>
                   
                            <td key={post.employee_id}>{post.name}</td>
                            <td key={post.employee_id}>{post.employee_id}</td>
                            <td key={post.employee_id}>{post.nic_no}</td>
                            <td key={post.employee_id}>{post.address}</td>
                            <td key={post.employee_id}>{post.gender}</td>
                            <td key={post.employee_id}>{post.marital_status}</td>
                            <td key={post.employee_id}>{post.contact_no}</td>
                            <td key={post.employee_id}>{post.employee_type}</td>
                            <td>
                        <a className="btn btn-warning" href={`/update/${post._id}`}>
                          <i className="fas fa-edit"></i>&nbsp;Update
                        </a></td>

                    </tr>
                    ))}
                    
                </tbody>
</table>
            
        </div>
    )
}