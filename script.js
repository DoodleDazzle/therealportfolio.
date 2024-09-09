document.addEventListener('DOMContentLoaded', function() {
    const roles = [
        "Cloud Engineer",
        "Web Developer",
        "Frontend Developer",
        "Passionate Programmer",
    ];
    let index = 0;
    const roleText = document.getElementById('role-text');

    function toggleRoles() {
        roleText.style.opacity = '0';
        setTimeout(() => {
            roleText.textContent = roles[index];
            roleText.style.opacity = '1';
            index = (index + 1) % roles.length;
        }, 500);
    }

    function animate() {
        // Your animation logic here
        requestAnimationFrame(animate);
    }
    animate();
    
    toggleRoles();


    setInterval(toggleRoles, 2000);
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}