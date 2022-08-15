// Write your solution in this file!
const employee = {
    name: 'Pete',
    streetAddress: 'Longview',
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function  deleteFromEmployeeByKey(employee, key) {
    const newDel = { ...employee };
    delete newDel[key]
    return newDel;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}