document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("#todo-list li");

  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  });
});
