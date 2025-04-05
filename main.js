document.addEventListener("DOMContentLoaded", loadData);
document.getElementById("courseForm").addEventListener("submit", addCourse);

function addCourse(event) {
  event.preventDefault();
  const courseName = document.getElementById("courseName").value;
  const courseCategory = document.getElementById("courseCategory").value;
  const coursePrice = document.getElementById("coursePrice").value;
  const courseDescription = document.getElementById("courseDescription").value;
  const courseCapacity = document.getElementById("courseCapacity").value;

  if (
    !courseName ||
    !courseCategory ||
    !coursePrice ||
    !courseDescription ||
    !courseCapacity
  ) {
    alert("Please fill all fields.");
    return;
  }

  let courses = JSON.parse(localStorage.getItem("courses")) || [];
  const newCourse = {
    name: courseName,
    category: courseCategory,
    price: coursePrice,
    description: courseDescription,
    capacity: courseCapacity,
  };

  courses.push(newCourse);
  localStorage.setItem("courses", JSON.stringify(courses));
  document.getElementById("courseForm").reset();
  loadData();
}

function loadData() {
  const courses = JSON.parse(localStorage.getItem("courses")) || [];
  const dataTable = document.getElementById("data");
  dataTable.innerHTML = "";

  courses.forEach((course, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${course.name}</td>
      <td>${course.category}</td>
      <td>${course.price}</td>
      <td>${course.description}</td>
      <td>${course.capacity}</td>
      <td><button class="btn btn-outline-warning btn-sm">Update</button></td>
    `;

    dataTable.appendChild(row);
  });
}
