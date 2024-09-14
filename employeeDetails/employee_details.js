//Initialize the employees as an array, with key value pairs.
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', a0ge: 28, department: 'HR', salary: 45000, specialization: 'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java'},
    //More employee records here...
];

//Function to display  all employees, stored in the array
function displayEmployees() { 
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//Calculate the total salaries:
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
};

//Display all HREmployees()
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
        const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
};

//Search function to findEmployeesById:
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
    }
}

function findEmployeeBySpecialization(employeeSpec) {
    const foundEmployeeBySpec = employees.find(employee => employee.specialization === employeeSpec);
    if (foundEmployeeBySpec) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployeeBySpec.id}: ${foundEmployeeBySpec.name} - ${foundEmployeeBySpec.department} - ${foundEmployeeBySpec.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this Specialization';
    }
}