const router = require("express").Router();
let employee = require("../models/employee");

router.route("/add").post((req,res) => {

    const name = req.body.name;
    const employee_id = req.body.employee_id;
    const nic_no = req.body.nic_no;
    const address = req.body.address;
    const gender = req.body.gender;
    const marital_status = req.body.marital_status;
    const contact_no = req.body.contact_no;
    const date_of_birth = req.body.date_of_birth;
    const employee_group = req.body.employee_group;
    const employee_type = req.body. employee_type;
    const basic_salary = req.body.basic_salary;


    const newEmployee = new employee({
        
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


    })

    newEmployee.save().then(()=> {
        res.json("New Employee Added To the System")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{

    employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const { name,employee_id,nic_no,address,gender,marital_status,contact_no, date_of_birth,employee_group,employee_type,basic_salary} = req.body;

    const updateEmployee = {

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

    const update = await employee.findByIdAndUpdate(userId, updateEmployee).then(() => {

        res.status(200).send({status: "Employee Updated"})

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});

    })

})


router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await employee.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "Employee Deleted"});
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({status: "Error with delete user" , error : err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await employee.findById(userId).then((employee) =>{
        res.status(200).send({status: "Employee fetched" , user: employee})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error With get employee" ,error: err.message});
    })
})


module.exports = router; 