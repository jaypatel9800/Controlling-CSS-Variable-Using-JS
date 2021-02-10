const inputs = document.querySelectorAll('.control input')
function handleUpdate() {
    const change = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + change)
}
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUpdate));