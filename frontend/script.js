
const API_URL = "http://localhost:8080/api/students";

const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const message = document.getElementById("message");

// Display all students
async function loadStudents() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to load students");
        }

        const students = await response.json();
        displayStudents(students);

    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
}

// Display students in the table
function displayStudents(students) {
    studentTable.innerHTML = "";

    if (students.length === 0) {
        studentTable.innerHTML =
            `<tr><td colspan="6">No students found</td></tr>`;
        return;
    }

    students.forEach(student => {
        const row = document.createElement("tr");

        const values = [
            student.id,
            student.name,
            student.email,
            student.course,
            student.age
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actions = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.onclick = () => editStudent(student);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = () => deleteStudent(student.id);

        actions.appendChild(editButton);
        actions.appendChild(deleteButton);

        row.appendChild(actions);
        studentTable.appendChild(row);
    });
}

// Add or update student
studentForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value;

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value,
        age: Number(document.getElementById("age").value)
    };

    try {
        let response;

        if (id) {
            response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });
        } else {
            response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            });
        }

        if (!response.ok) {
            throw new Error("Unable to save student");
        }

        message.textContent = id
            ? "Student updated successfully!"
            : "Student added successfully!";

        resetForm();
        loadStudents();

    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
});

// Fill the form for editing
function editStudent(student) {
    document.getElementById("studentId").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("course").value = student.course;
    document.getElementById("age").value = student.age;

    document.getElementById("formTitle").textContent =
        "Update Student";

    document.getElementById("submitButton").textContent =
        "Update Student";

    document.getElementById("cancelButton").hidden = false;

    window.scrollTo(0, 0);
}

// Delete student
async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Unable to delete student");
        }

        message.textContent = "Student deleted successfully!";
        loadStudents();

    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
}

// Search students by course
async function searchByCourse() {
    const course = document.getElementById("searchCourse").value.trim();

    if (!course) {
        message.textContent = "Please enter a course name";
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/course/${encodeURIComponent(course)}`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        const students = await response.json();
        displayStudents(students);

    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
}

// Reset form
function resetForm() {
    studentForm.reset();

    document.getElementById("studentId").value = "";

    document.getElementById("formTitle").textContent =
        "Add New Student";

    document.getElementById("submitButton").textContent =
        "Add Student";

    document.getElementById("cancelButton").hidden = true;
}

// Load students when the page opens
loadStudents();
