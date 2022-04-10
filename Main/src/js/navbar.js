console.log("test");

document.getElementById("togglebar").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("-right-full")
    document.getElementById("nav").classList.toggle("right-0")
})