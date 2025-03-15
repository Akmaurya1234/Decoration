// Function to open the side menu
function toggleSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    sideMenu.style.width = "250px"; // Increase width to show the menu
    sideMenu.style.display = "block"; // Display the side menu
}

// Function to close the side menu
function closeSideMenu() {
    var sideMenu = document.getElementById("sideMenu");
    sideMenu.style.width = "0"; // Set width back to 0 to hide the menu
    sideMenu.style.display = "none"; // Hide the side menu
}

// Close the side menu if the user clicks outside of it
window.onclick = function(event) {
    var sideMenu = document.getElementById("sideMenu");
    var hamburgerIcon = document.querySelector(".hamburger-icon");
    
    if (!sideMenu.contains(event.target) && event.target !== hamburgerIcon) {
        closeSideMenu();
    }
}
