console.log('JS Loaded!');

$(readyNow);

let totalMonthly = 0;


function readyNow(){

    $('#submitButton').on('click', addEmployee);






}

function addEmployee(){
    
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let idNumber = $('#idNumberInput').val();
    let jobTitle = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();

    totalMonthly += Number(annualSalary);
    $('#monthlySalary').empty();
    $('#monthlySalary').append(totalMonthly);

    console.log(`${firstName} ${lastName} ${idNumber} ${jobTitle} ${annualSalary}`);
    $('#employeeList').append(`
    <tr class="${idNumber}">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteBtn ${idNumber}">DELETE</button></td>
    </tr>`);
    
    
}

