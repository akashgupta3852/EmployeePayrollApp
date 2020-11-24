let empPayrollList;
window.addEventListener('DOMContentLoaded', () => {
    empPayrollList = getEmployeeDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    if(empPayrollList.length == 0) return;
    const headerHTML = "<tr>" 
                        + "<th></th>    <th> Name </th>    <th> Gender </th>" 
                        + "<th> Department </th>    <th> Salary </th> "
                        + "<th> Start Date </th>    <th> Actions </th>"
                        + "</tr>";

    let innerHTMLFromJS = `${headerHTML}`;
    for(let empPayrollData of empPayrollList) {
        innerHTMLFromJS = `${innerHTMLFromJS}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${stringifyDate(empPayrollData._startDate)}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHTMLFromJS;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`  // first ${deptHtml} is for adding the number of divs we want to put
    }
    return deptHtml;
} 