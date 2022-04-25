import React, {useState, useEffect} from 'react';
import axios from 'axios';


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




function onDelete(id) {
    axios.delete("http://localhost:8070/employee/delete/"+ id)
        .then((res) => {
            console.log(res)
            alert('employee detail deleted')
            window.location.reload(true)//reload page

        }).catch(() => {
            alert('error while deleting Inventory Detail')
        })

}


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
                            <td><button  onClick={() =>onDelete(post._id)}>Delete</button></td>

                    </tr>
                    ))}
                    
                </tbody>
</table>
            
        </div>
    )
}