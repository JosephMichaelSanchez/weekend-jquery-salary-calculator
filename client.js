console.log('JS Loaded!');

$(readyNow);

let totalMonthly = 0;
let payrollInfo = [];

function readyNow(){

    $('#submitButton').on('click', addEmployee);

    $('#employeeList').on('click', '.deleteBtn', deleteRow);

}

function addEmployee(){
    
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();

    const employee = {
        firstName: firstName, 
        lastName: lastName,
        id: idNumber,
        title: jobTitle,
        salary: annualSalary 
    }

    payrollInfo.push(employee);

    totalMonthly += Math.floor(Number(annualSalary)/12);
    $('#monthlySalary').empty();
    $('#monthlySalary').append(totalMonthly);

    monthlyWarning();

    console.log(`Adding ${firstName} ${lastName} to payroll.`);
    $('#employeeList').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteBtn btn btn-dark">DELETE</button></td>
    </tr>`);

    $('input').val('');
    
    
}



function deleteRow(){
    $(this).closest("tr").remove();
    
}

function monthlyWarning(){
if(totalMonthly > 20000){
    console.log('hello');
    $('#monthlySalary').toggleClass('warning');
    
}

}



