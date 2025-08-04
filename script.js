// Define Employee type using JSDoc for type hints
/**
 * @typedef {Object} Employee
 * @property {string} fullName
 * @property {number} age
 * @property {string} department
 * @property {string[]} skills
 * @property {boolean} isActive
 */

// Create employees array
/** @type {Employee[]} */
const employees = [
    {
        fullName: "Alice Johnson",
        age: 30,
        department: "HR",
        skills: ["Communication", "Recruitment"],
        isActive: true
    },
    {
        fullName: "Bob Smith",
        age: 25,
        department: "Engineering",
        skills: ["JavaScript", "React", "Node.js"],
        isActive: false
    },
    {
        fullName: "Carol Lee",
        age: 28,
        department: "Marketing",
        skills: ["SEO", "Content Creation"],
        isActive: true
    }
];

// Render employees to the page
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = employees.map(emp => `
    <div>
        <strong>Name:</strong> ${emp.fullName}<br>
        <strong>Age:</strong> ${emp.age}<br>
        <strong>Department:</strong> ${emp.department}<br>
        <strong>Skills:</strong> ${emp.skills.join(', ')}<br>
        <strong>Status:</strong> ${emp.isActive ? 'Active' : 'No'}
    </div>
    <hr>
`).join('');