const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name : {
        type : String,
        required : true
        
    },
    employee_id : {
        type : String,
        required : true
    },
    nic_no : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    marital_status : {
        type : String,
        required : true
    },
    contact_no : {
        type : String,
        required : true
    },
    date_of_birth : {
        type : String,
        required : true
    },
    employee_group : {
        type : String,
        required : true
    },
    employee_type : {
        type : String,
        required : true
    },
    basic_salary : {
        type : String,
        required : true
    }


},{
    versionKey : false
});

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;