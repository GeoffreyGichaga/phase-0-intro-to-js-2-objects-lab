// Write your solution in this file!
const employee = {
    name:"Jeff TJ",
    streetAddress:"Ngong Road"
}


function updateEmployeeWithKeyAndValue(object,key,value)
{
    let updatedEmployee = {
        ...object,
        [key]:value

    }
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
     employee[key] = value
     return employee
}

function deleteFromEmployeeByKey(employee, key)
{
    let newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key]
    return employee
     

}