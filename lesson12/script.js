const button = document.getElementById("myButton");

button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log(event);
  console.log("Clicked: ", this.textContent);
}
