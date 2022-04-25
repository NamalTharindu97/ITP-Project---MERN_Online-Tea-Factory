import React,{useState} from "react";
import axios from "axios";
import "../App.css";

export default function AddEmployee() {


    const [name, setName] = useState("");
    const [employee_id, setEmployeeId] = useState("");
    const [nic_no, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [marital_status, setMaritalStatus] = useState("");
    const [contact_no, setContact] = useState("");
    const [date_of_birth, setDob] = useState("");
    const [employee_group, setEmployeeGroup] = useState("");
    const [employee_type, setEmployeeType] = useState("");
    const [basic_salary, setBasicSal] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newEmployee ={

            name,
            employee_id,
            nic_no,
            address,
            gender,
            marital_status,
            contact_no,
            date_of_birth,
            employee_group,
            employee_type,
            basic_salary
        }

        console.log(newEmployee);


    axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
      alert("Employee Added!");
    }).catch((err)=>{
      alert(err)
    })


    }


    return (

        <div className="container">

                        <form onSubmit={sendData} >

                        {/* Name */}
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" placeholder="Enter Your Name Here"
                            onChange={(e) => {

                                setName(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        {/* Employee ID */}
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Employee ID</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="employeeId" placeholder="Enter Your Employee ID Here "
                            onChange={(e) => {

                                setEmployeeId(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        {/* NIC */}
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">NIC</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="nicNo" placeholder="Enter Your NIC Here "
                            onChange={(e) => {

                                setNIC(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        {/* Address */}
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Address</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="nicNo" placeholder="Enter Your Address Here "
                            onChange={(e) => {

                                setAddress(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        {/* gender */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Gender</label>

                            <div class="col-sm-10">

                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="male" value="Male" name="gender" class="custom-control-input"
                                onChange={(e) => {

                                    setGender(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="male">Male</label>

                            </div>
                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="female" value="Female" name="gender" class="custom-control-input"
                                    onChange={(e) => {

                                    setGender(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="female">Female</label>

                            </div>
                            </div>


                        </div> 

                        {/* MaritalStatus    */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Marital Status</label>

                            <div class="col-sm-10">

                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Married" value="Married" name="MaritalStatus" class="custom-control-input"
                                onChange={(e) => {

                                    setMaritalStatus(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Married">Married</label>

                            </div>
                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Unmarried" value="Unmarried" name="MaritalStatus" class="custom-control-input"
                                    onChange={(e) => {

                                        setMaritalStatus(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Unmarried">Unmarried</label>

                            </div>
                            </div>


                        </div>

                        {/* contact_no */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Contact No </label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="contactNo" placeholder="Enter Your Contact Number Here"
                            onChange={(e) => {

                                setContact(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        {/* DOB */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Date Of Date Of Birth </label>
                            <div class="col-sm-10">
                            <input type="date" class="form-control" id="dob" placeholder="Enter Your DOB Here"
                            onChange={(e) => {

                                setDob(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>


                        {/* EmployeeGroup */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Employee Group</label>

                            <div class="col-sm-10">

                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Staff" value="Staff" name="EmployeeGroup" class="custom-control-input"
                                onChange={(e) => {

                                    setEmployeeGroup(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Staff">Staff</label>

                            </div>
                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Labores" value="Labores" name="EmployeeGroup" class="custom-control-input"
                                    onChange={(e) => {

                                        setEmployeeGroup(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Labores">Labores</label>

                            </div>
                            </div>


                        </div>

                        {/* EmployeeType */}

                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Employee Type</label>

                            <div class="col-sm-10">

                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Permenent" value="Permenent" name="EmployeeType" class="custom-control-input"
                                onChange={(e) => {

                                    setEmployeeType(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Permenent">Permenent</label>

                            </div>
                            <div class="custom-control custom-radio custom-control-inline">

                            <input type="radio" id="Temporary" value="Temporary" name="EmployeeType" class="custom-control-input"
                                    onChange={(e) => {

                                        setEmployeeType(e.target.value);
                            
                                }}
                            />
                            <label class="custom-control-label" for="Temporary">Temporary</label>

                            </div>
                            </div>


                        </div>

                        {/* basic_salary */}
                        <div class="form-group row">
                            <label for="colFormLabel" class="col-sm-2 col-form-label">Basic Salary </label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="basic_salary" placeholder="Enter Your Basic Salary Here"
                            onChange={(e) => {

                                setBasicSal(e.target.value);

                            }}
                            
                            />
                            </div>
                        </div>

                        <div className="btn">
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">ADD</button>
                            </div>
                        </div>
                        </div>


                        </form>


        </div>


    )



}