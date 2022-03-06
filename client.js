console.log('JS Loaded!');

$(readyNow);
// create a variable to track monthly payroll
let totalMonthly = 0;
// create an array to store each employee's info as an object
let payrollInfo = [];
// readyNow function
function readyNow(){
    // click listener for the 'Submit' button
    $('#submitButton').on('click', addEmployee);
    // click listener for each employee's 'Delete' button
    $('#employeeList').on('click', '.deleteBtn', deleteRow);

}
// function to retrieve the data from the input boxes and manipulate the info retrieved
function addEmployee(){
    // create 5 variables, each corresponding to the data provided in the input boxes
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    // create an object named 'employee' and set it's 5 properties to the variables created by the input data
    const employee = {
        firstName: firstName, 
        lastName: lastName,
        id: idNumber,
        title: jobTitle,
        salary: annualSalary 
    }
    // push the employee object into the payrollInfo array
    payrollInfo.push(employee);
    // update the totalMonthly variable by adding the added employee's annual salary, and dividing the variable by 12
    totalMonthly += Math.ceil(Number(annualSalary)/12);
    // append totalMonthly to the DOM
    $('#monthlySalary').empty();
    $('#monthlySalary').append(totalMonthly);
    // call the monthlyWarning function
    monthlyWarning();
    // logging the name of the added employee to the console 
    console.log(`Adding ${firstName} ${lastName} to payroll.`);
    // appending the information from the 5 input boxes to the DOM
    $('#employeeList').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteBtn btn btn-dark">DELETE</button></td>
    </tr>`);
    // clearing the 5 input boxes on the DOM
    $('input').val('');
    
    
}


// function to delete a row from the table
function deleteRow(){
    //function will target 'this', which will be a delete button, and delete the closest "tr" (row)
    $(this).closest("tr").remove();
    
}
// function to check if the monthly salary is above $20000
function monthlyWarning(){
    //conditional that checks if the totalMonthly variable is above $20000
    if(totalMonthly > 20000){
        // if the if statement is true, the function targets the span displaying the monthly salary
        // and toggles it's class to 'warning', giving it a red background
        $('#monthlySalary').toggleClass('warning');
    
}

}



