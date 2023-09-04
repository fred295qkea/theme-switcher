document.querySelector("select").addEventListener("change", themeChnage);

function themeChnage(event) {
  document.querySelector("body").setAttribute("data-theme", event.target.value);
  console.log(event.target.value);
}
