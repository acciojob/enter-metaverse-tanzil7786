document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById("status");
    const enterButton = document.getElementById("enterBtn");
    
    enterButton.addEventListener("click", function() {
        statusElement.innerHTML = "<h1>Entered Metaverse</h1>";
    });
});
