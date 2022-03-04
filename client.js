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

    console.log(`${firstName} ${lastName} ${idNumber} ${jobTitle} ${annualSalary}`);
    
    
}

