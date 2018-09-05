//this will create a class of new employees
class Employee {
    constructor(firstName, lastName, employeeID, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.title = title;
        this.salary = salary;
    }//end constructor
}//end class Employee

let allNewEmployees = [];

$(document).ready(readyNow)
let salary = [];
let totalSalary = 1;

function readyNow() {
    $('#submitButton').on('click', handleClick);
    $('#empTableBody').on('click', '.removeEmp', handleDelete);
    $('#empTableBody').mouseenter(empTabBodMouseEnter);
    $('#empTableBody').mouseleave(empTabBodMouseLeave);

    addSalaries();
    
}//end readys

function handleClick() {
    let newFirstName = $('#firstNIn').val();
    let newLastName = $('#lastNIn').val();
    let newId = $('#iDIn').val();
    let newTitle = $('#titleIn').val();
    let newAnnSal = $('#annSalIn').val();

    //this captures data from the input fields and pushes it in to the allNewEmployees array 
    //for some reason, writing `const = new Employee(firstName,...)` to push data
    //in to the array (for testing purposes) did not work, but this works to append the new
    //objects created from the class in to the allNewEmployees array
    allNewEmployees.push(new Employee(newFirstName, newLastName, newId, newTitle, newAnnSal));

    $('#empTableBody').append(
        `<tr>
        <td> `+ newFirstName + ` </td>
        <td>` + newLastName + ` </td>
        <td>`+ newId + ` </td>
        <td>`+ newTitle + ` </td>
        <td>`+ newAnnSal + ` </td>
        <td><button class="removeEmp">Delete</button></td>
    </tr>`
    );//end append input data to DOM

    //this will push data from the Annual Salary input field into the 
    //salary array, which is then used in the addSalaries function 
    //to calculate monthly totals
    salary.push(newAnnSal);
    totalSalary = addSalaries();

    //this will place monthly totals on to the DOM
    $('#totalSalary').text('Total Monthly:' + '$' + totalSalary);

    //this, `.val('')`, clears out input data after submit button is clicked
    $('#firstNIn').val('');
    $('#lastNIn').val('');
    $('#iDIn').val('');
    $('#titleIn').val('');
    $('#annSalIn').val('');
}//end handleClick

function addSalaries() {
    let subTotal = 0
    for (let i = 0; i < salary.length; i++) {
        subTotal = subTotal + parseInt(salary[i]) / 12;
    }//end for loop 
    if (subTotal > 20000) {
        console.log('>$20,000');
        $('#totalSalary').css('background-color', 'red');

        //was trying to turn the total green until it became red
        //I'll try again later
        // } else {
        //     console.log('On Budget');
        //     $('#totalSalary').css('color', '#288739');

    }//end conditional
    return subTotal.toFixed(2);
}//end addSalaries

function handleDelete() {
    $(this).parent().parent().remove();    
}//end handleDelete

//these functions should just target the moused over elements, but it is
//targets all in the table. need to come back to it
function empTabBodMouseEnter() {
    $(this).css('background-color', '#00ff59');
}//end empTabBodMouseEnter

function empTabBodMouseLeave() {

    $(this).css('background-color', '#eeeeeede');
}//end empTabBodMouseLeave

//this will give a warning before deleting employees
// function alertBox(){
//     alert('Are you sure you want to delete this employee?')
// }
