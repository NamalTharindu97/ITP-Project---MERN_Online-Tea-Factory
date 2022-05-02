
import React,{Component} from "react";
import axios from 'axios';
import "../App.css";


 export default class editPack extends Component{

    

  constructor(props){
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeemployee_id = this.onChangeemployee_id.bind(this);
    this.onChangenic_no = this.onChangenic_no.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this)
    this.onChangegender = this.onChangegender.bind(this)
    this.onChangemarital_status = this.onChangemarital_status.bind(this)
    this.onChangecontact_no = this.onChangecontact_no.bind(this)
    this.onChangedate_of_birth = this.onChangedate_of_birth.bind(this)
    this.onChangeemployee_group = this.onChangeemployee_group.bind(this)
    this.onChangeemployee_type = this.onChangeemployee_type.bind(this)
    this.onChangebasic_salary = this.onChangebasic_salary.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        packages:[]
    }
  } 

  componentDidMount() {
    this.retrivePackages();
  }

  retrivePackages(){
    axios.get("http://localhost:8070/employee/get/625db67491c9bbf945b428b9")
      .then(response => {
        console.log(response.data);
        //this.setState({packages:response.data.Package})
        this.setState({packages:response.data.employee});
        this.setState({
      
            name:response.data.name,
            employee_id:response.data.employee_id,
            nic_no:response.data.nic_no,
            address:response.data.address,
            gender:response.data.gender,
            marital_status:response.data.marital_status,
            contact_no:response.data.contact_no,
            date_of_birth:response.data.date_of_birth,
            employee_group:response.data.employee_group,
            employee_type:response.data.employee_type,
            basic_salary:response.data.basic_salary


        });
      })
      .catch(function (error){
        console.log(error);
    })
  }
  

  onChangename(e){
    this.setState({
        name: e.target.value
    });
  }

  onChangeemployee_id(e){
    this.setState({
        employee_id: e.target.value
    });
  }

  onChangenic_no(e){
    this.setState({
        nic_no: e.target.value
    });
  }

  onChangeaddress(e){
    this.setState({
        address: e.target.value
    });
  }

  onChangegender(e){
    this.setState({
        gender: e.target.value
    });
  }

  onChangemarital_status(e){
    this.setState({
        marital_status: e.target.value
    });
  }

  onChangedate_of_birth(e){
    this.setState({
        date_of_birth: e.target.value
    });
  }

  onChangeemployee_group(e){
    this.setState({
        employee_group: e.target.value
    });
  }

  onChangeemployee_type(e){
    this.setState({
        employee_type : e.target.value
    });
  } 
  onChangebasic_salary(e){
    this.setState({
        basic_salary : e.target.value
    });
  } 
  onChangecontact_no(e){
    this.setState({
        contact_no : e.target.value
    });
  } 
   
   
  onSubmit(e){
    e.preventDefault();
      const obj = {
      
        name: this.state.name,
        employee_id: this.state.employee_id,
        nic_no: this.state.nic_no,
        address : this.state.address ,
        gender: this.state.gender,
        marital_status: this.state.marital_status,
        contact_no: this.state.contact_no,
        date_of_birth: this.state.date_of_birth,
        employee_group : this.state.employee_group,
        employee_type : this.state.employee_type,
        basic_salary : this.state.basic_salary
     
    }

    axios.put("http://localhost:8070/employee/update/625db67491c9bbf945b428b9",obj ).then(()=>{
      alert("Employee Successfully Updated!");
    }).catch((err)=>{
        alert(err)
    })
  }

  

  render() {
    return (
      
        <div className="container">

        <form >

        {/* Name */}
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="name" placeholder="Enter Your Name Here"
                defaultValue={this.state.packages.name}
                onChange={this.onChangename}
            
            />
            </div>
        </div>

        {/* Employee ID */}
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Employee ID</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="employeeId" placeholder="Enter Your Employee ID Here "
                defaultValue={this.state.packages.employee_id}
                onChange={this.onChangeemployee_id}
            
            />
            </div>
        </div>

        {/* NIC */}
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">NIC</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="nicNo" placeholder="Enter Your NIC Here "
                defaultValue={this.state.packages.nic_no}
                onChange={this.onChangenic_no}
            
            />
            </div>
        </div>

        {/* Address */}
        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="nicNo" placeholder="Enter Your Address Here "
                defaultValue={this.state.packages.address}
                onChange={this.onChangeaddress}
            
            />
            </div>
        </div>

        {/* gender */}

        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Gender</label>

            <div class="col-sm-10">

            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="male" value="Male" name="gender" class="custom-control-input"
                checked={this.state.packages.gender === "Male"}
                defaultValue={this.state.packages.gender}
                onChange={this.onChangegender}
                
            />
            <label class="custom-control-label" for="male">Male</label>

            </div>
            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="female" value="Female" name="gender" class="custom-control-input"
                checked={this.state.packages.gender === "Female"}
                defaultValue={this.state.packages.gender}
                onChange={this.onChangegender}
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
                checked={this.state.packages.marital_status === "Married"}
                onChange={this.onChangemarital_status}
            />
            <label class="custom-control-label" for="Married">Married</label>

            </div>
            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="Unmarried" value="Unmarried" name="MaritalStatus" class="custom-control-input"
                checked={this.state.packages.marital_status === "Unmarried"}
                onChange={this.onChangemarital_status}
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
                defaultValue={this.state.packages.contact_no}
                onChange={this.onChangecontact_no}
            
            />
            </div>
        </div>

        {/* DOB */}

        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Date Of Date Of Birth </label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="dob" placeholder="Enter Your DOB Here"
                defaultValue={this.state.packages.date_of_birth}
                onChange={this.onChangedate_of_birth}
            
            />
            </div>
        </div>


        {/* EmployeeGroup */}

        <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">Employee Group</label>

            <div class="col-sm-10">

            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="Staff" value="Staff" name="EmployeeGroup" class="custom-control-input"
                checked={this.state.packages.employee_group === "Staff"}
                onChange={this.onChangeemployee_group}
            />
            <label class="custom-control-label" for="Staff">Staff</label>

            </div>
            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="Labores" value="Labores" name="EmployeeGroup" class="custom-control-input"
                checked={this.state.packages.employee_group === "Labores"}
                onChange={this.onChangeemployee_group}
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
                checked={this.state.packages.employee_type === "Permenent"}
                onChange={this.onChangeemployee_type}
            />
            <label class="custom-control-label" for="Permenent">Permenent</label>

            </div>
            <div class="custom-control custom-radio custom-control-inline">

            <input type="radio" id="Temporary" value="Temporary" name="EmployeeType" class="custom-control-input"
                checked={this.state.packages.employee_type === "Temporary" }
                onChange={this.onChangeemployee_type}
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
                defaultValue={this.state.packages.basic_salary}
                onChange={this.onChangebasic_salary}
            
            />
            </div>
        </div>

        <div className="btn">
        <div className="form-group row">
            <div className="col-sm-10">
            <button type="submit" class="btn btn-success" onClick={this.onSubmit}>Update</button>
            </div>
        </div>
        </div>


        </form>


</div>
    );
  
  }
  
   }