
// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// Close the menu after clicking a navigation link
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});
