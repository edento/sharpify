var toggle = document.getElementById("isPluginOn");

console.log("Found element", toggle)

toggle.addEventListener("change", function(e) {
    console.log("toggled");
});