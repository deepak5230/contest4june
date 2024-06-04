/*fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json").then((data) =>{

return data.json();


}).then((objectData)=>{
    console.log(objectData[0].first_name);

    let tableData="";

    objectData.map((values)=>{

        tableData+=`<tr>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        <td>${values.gender}</td>
        <td>${values.img_src}</td>
      </tr>
      `;


    })
    document.getElementById("table_body").innerHTML=tableData;

})//


function sortData(type) {
    const sortedData = [...filteredStudents];
    switch (type) {
        case 'AZ':
            sortedData.sort((a, b) =>
                (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name)
            );
            break;
        case 'ZA':
            sortedData.sort((a, b) =>
                (b.first_name + ' ' + b.last_name).localeCompare(a.first_name + ' ' + a.last_name)
            );
            break;
        case 'marks':
            sortedData.sort((a, b) => a.marks - b.marks);
            break;
        case 'passing':
            renderTable(students.filter(student => student.passing));
            return;
        case 'class':
            sortedData.sort((a, b) => a.class - b.class);
            break;
        case 'gender':
            const males = sortedData.filter(student => student.gender === 'male');
            const females = sortedData.filter(student => student.gender === 'female');
            renderGenderTables(females, males);
            return;
        default:
            break;
    }
    renderTable(sortedData);
}*////

[8:01 pm, 4/6/2024] voglas: let filteredStudents = [];

// Fetch data from the provided URL
async function fetchStudents() {
    const response = await fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json');
    const data = await response.json();
    students = data;
    filteredStudents = data;
    renderTable(filteredStudents);
}

// Render table with student data
function renderTable(data) {
    const tbody = document.querySelector('#student-table tbody');
    tbody.innerHTML = '';

    data.forEach(student => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = student.image;
        img.alt = ${student.first_name} ${student.last_name};
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = ${student.first_name} ${student.last_name};
        row.appendChild(nameCell);

        const marksCell = document.createElement('td');
        marksCell.textContent = student.marks;
        row.appendChild(marksCell);

        const passingCell = document.createElement('td');
        passingCell.textContent = student.passing ? 'Passing' : 'Failed';
        row.appendChild(passingCell);

        const classCell = document.createElement('td');
        classCell.textContent = student.class;
        row.appendChild(classCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        tbody.appendChild(row);
    });
}

// Handle search input
document.getElementById('search').addEventListener('input', function(event) {
    const term = event.target.value.toLowerCase();
    filteredStudents = students.filter(student =>
        student.first_name.toLowerCase().includes(term) ||
        student.last_name.toLowerCase().includes(term) ||
        student.email.toLowerCase().includes(term)
    );
    renderTable(filteredStudents);
});

// Sorting function
function sortData(type) {
    const sortedData = [...filteredStudents];
    switch (type) {
        case 'AZ':
            sortedData.sort((a, b) =>
                (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name)
            );
            break;
        case 'ZA':
            sortedData.sort((a, b) =>
                (b.first_name + ' ' + b.last_name).localeCompare(a.first_name + ' ' + a.last_name)
            );
            break;
        case 'marks':
            sortedData.sort((a, b) => a.marks - b.marks);
            break;
        case 'passing':
            renderTable(students.filter(student => student.passing));
            return;
        case 'class':
            sortedData.sort((a, b) => a.class - b.class);
            break;
        case 'gender':
            const males = sortedData.filter(student => student.gender === 'male');
            const females = sortedData.filter(student => student.gender === 'female');
            renderGenderTables(females, males);
            return;
        default:
            break;
    }
    renderTable(sortedData);
}

// Render gender-specific tables
function renderGenderTables(females, males) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    const femaleTable = createGenderTable('Female Students', females);
    const maleTable = createGenderTable('Male Students', males);

    tableContainer.appendChild(femaleTable);
    tableContainer.appendChild(maleTable);
}

function createGenderTable(title, data) {
    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('gender-tables');

    const header = document.createElement('h2');
    header.textContent = title;
    tableWrapper.appendChild(header);

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Class</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');
    data.forEach(student => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = student.image;
        img.alt = ${student.first_name} ${student.last_name};
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = ${student.first_name} ${student.last_name};
        row.appendChild(nameCell);

        const marksCell = document.createElement('td');
        marksCell.textContent = student.marks;
        row.appendChild(marksCell);

        const passingCell = document.createElement('td');
        passingCell.textContent = student.passing ? 'Passing' : 'Failed';
        row.appendChild(passingCell);

        const classCell = document.createElement('td');
        classCell.textContent = student.class;
        row.appendChild(classCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        tbody.appendChild(row);
    });

    tableWrapper.appendChild(table);
    return tableWrapper;
}

// Fetch and display students on load
fetchStudents();
[8:01 pm, 4/6/2024] voglas: Dono code paste kro
[8:03 pm, 4/6/2024] voglas: Kiye
[8:14 pm, 4/6/2024] voglas: let students = [];
let filteredStudents = [];

// Fetch data from the provided URL
async function fetchStudents() {
    const response = await fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json');
    const data = await response.json();
    students = data;
    filteredStudents = data;
    renderTable(filteredStudents);
}

// Render table with student data
function renderTable(data) {
    const tbody = document.querySelector('#student-table tbody');
    tbody.innerHTML = '';

    data.forEach(student => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = student.image;
        img.alt = ${student.first_name} ${student.last_name};
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = ${student.first_name} ${student.last_name};
        row.appendChild(nameCell);

        const marksCell = document.createElement('td');
        marksCell.textContent = student.marks;
        row.appendChild(marksCell);

        const passingCell = document.createElement('td');
        passingCell.textContent = student.passing ? 'Passing' : 'Failed';
        row.appendChild(passingCell);

        const classCell = document.createElement('td');
        classCell.textContent = student.class;
        row.appendChild(classCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        tbody.appendChild(row);
    });
}

// Handle search input
document.getElementById('search').addEventListener('input', function(event) {
    const term = event.target.value.toLowerCase();
    filteredStudents = students.filter(student =>
        student.first_name.toLowerCase().includes(term) ||
        student.last_name.toLowerCase().includes(term) ||
        student.email.toLowerCase().includes(term)
    );
    renderTable(filteredStudents);
});

// Sorting function
function sortData(type) {
    const sortedData = [...filteredStudents];
    switch (type) {
        case 'AZ':
            sortedData.sort((a, b) =>
                (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name)
            );
            break;
        case 'ZA':
            sortedData.sort((a, b) =>
                (b.first_name + ' ' + b.last_name).localeCompare(a.first_name + ' ' + a.last_name)
            );
            break;
        case 'marks':
            sortedData.sort((a, b) => a.marks - b.marks);
            break;
        case 'passing':
            renderTable(students.filter(student => student.passing));
            return;
        case 'class':
            sortedData.sort((a, b) => a.class - b.class);
            break;
        case 'gender':
            const males = sortedData.filter(student => student.gender === 'male');
            const females = sortedData.filter(student => student.gender === 'female');
            renderGenderTables(females, males);
            return;
        default:
            break;
    }
    renderTable(sortedData);
}

// Render gender-specific tables
function renderGenderTables(females, males) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    const femaleTable = createGenderTable('Female Students', females);
    const maleTable = createGenderTable('Male Students', males);

    tableContainer.appendChild(femaleTable);
    tableContainer.appendChild(maleTable);
}

function createGenderTable(title, data) {
    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('gender-tables');

    const header = document.createElement('h2');
    header.textContent = title;
    tableWrapper.appendChild(header);

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Class</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');
    data.forEach(student => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = student.image;
        img.alt = ${student.first_name} ${student.last_name};
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = ${student.first_name} ${student.last_name};
        row.appendChild(nameCell);

        const marksCell = document.createElement('td');
        marksCell.textContent = student.marks;
        row.appendChild(marksCell);

        const passingCell = document.createElement('td');
        passingCell.textContent = student.passing ? 'Passing' : 'Failed';
        row.appendChild(passingCell);

        const classCell = document.createElement('td');
        classCell.textContent = student.class;
        row.appendChild(classCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const genderCell = document.createElement('td');
        genderCell.textContent = student.gender;
        row.appendChild(genderCell);

        tbody.appendChild(row);
    });

    tableWrapper.appendChild(table);
    return tableWrapper;
}

// Fetch and display students on load
fetchStudents();