document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#myForm");
  const submitBtn = form.querySelector("#Add");
  const Delete = document.querySelector("#delete");
  const category = form.querySelector("#Category");
  const box = document.querySelector(".box");
  const selected = []
  console.log(form.querySelector("#Category").value);

  

  const checkboxes = document.querySelectorAll(".task-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        const id = this.getAttribute("id");
        selected.push(id)
        console.log(`checkbox ${id} is selected.`);
      } else {
        const value = this.getAttribute("id");;
        console.log(`Checkbox ${value} is deselected.`);
      }
    });
    console.log(selected);
  });

Delete.addEventListener("click", function () {
  fetch("/delete", {
   method: "DELETE",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(selected),
 })
   .then((response) => {
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
     return response.json();
   })
   .then((data) => {
     console.log("Delete response:", data);
 window.location.reload();
     // Redirect to the previous page
     // or use window.history.back();
   })
   .catch((error) => console.error("Error deleting tasks:", error));
});

  
});
