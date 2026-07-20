// Select elements
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

// Keeps track of paragraph numbers
let count = 1;

// Listen for button click
addBtn.addEventListener("click", function () {

    // Create a div to hold the paragraph and delete button
    const box = document.createElement("div");
    box.classList.add("paragraph-box");

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = `Paragraph ${count}`;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete the paragraph when clicked
    deleteBtn.addEventListener("click", function () {
        box.remove();
    });

    // Add paragraph and button into the div
    box.appendChild(paragraph);
    box.appendChild(deleteBtn);

    // Display on page
    container.appendChild(box);

    // Increase the paragraph number
    count++;
});