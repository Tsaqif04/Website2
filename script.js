const hamburgerBtn = document.getElementById("hamburgerBtn")
const navMenu = document.getElementById("navMenu")
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
let screw = document.querySelector('.screw');
anime({
    targets: '.screw',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    loop: true
});

// Elemen
const loginModal = document.getElementById("loginModal");
const openLogin = document.getElementById("openLogin");
const closeLogin = document.getElementById("closeLogin");
const profileMenu = document.getElementById("profileMenu");
const profileName = document.getElementById("profileName");

// open popup
openLogin.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

// close popup
closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Login function
document.getElementById("loginBtn").addEventListener("click", function() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("loginMessage");
    if (user === "admin" && pass === "123"){
        msg.textContent = "Login Succesful"
        msg.style.color = "green";
        openLogin.style.display = "none";
        profileMenu.style.display = "flex";
        profileName.textContent = "user";
        setTimeout(() => {
            loginModal.style.display = "none";
        }, 1000);
    } else {
        msg.textContent = "Wrong username or password!";
        msg.style.color = "red";
    }
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    let isRotated = false;
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 15;
        const rotateY = (x / rect.width) * 15;
        const rotateZ = isRotated ? 40 : 0;
        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            rotateZ(${rotateZ}deg)
        `;
    });
    card.addEventListener("click", () => {
    isRotated = !isRotated;
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(${isRotated ? 40 : 0}deg)
    `;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      rotateZ(${isRotated ? 40 : 0}deg)
    `;
  });
});
    
    





































