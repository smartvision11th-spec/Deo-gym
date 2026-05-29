// LOADER
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// STICKY NAVBAR
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle(
    "scrolled",
    window.scrollY > 50
  );
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));

// BACK TO TOP
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// PLAN AUTO FILL
const chooseBtns = document.querySelectorAll(".choose-plan");
const selectedPlan = document.getElementById("selectedPlan");

chooseBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedPlan.value = btn.dataset.plan;

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// BMI CALCULATOR
document.getElementById("calculateBMI").addEventListener("click", () => {

  const height =
    document.getElementById("height").value / 100;

  const weight =
    document.getElementById("weight").value;

  const bmi = (weight / (height * height)).toFixed(1);

  let status = "";
  let suggestion = "";

  if (bmi < 18.5) {
    status = "Underweight";
    suggestion =
      "Join DEO GYM muscle gain programs to build strength and size.";
  } else if (bmi < 25) {
    status = "Normal";
    suggestion =
      "Maintain your physique and achieve aesthetic body goals at DEO GYM.";
  } else if (bmi < 30) {
    status = "Overweight";
    suggestion =
      "Join DEO GYM fat loss transformation programs for healthier fitness.";
  } else {
    status = "Obese";
    suggestion =
      "Join DEO GYM fat loss transformation programs for healthier fitness.";
  }

  document.getElementById("bmiResult").innerHTML = `
    <h3>Your BMI: ${bmi}</h3>
    <p>${status}</p>
    <small>${suggestion}</small>
  `;
});

// WHATSAPP FORM
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
      document.getElementById("name").value;

    const mobile =
      document.getElementById("mobile").value;

    const gender =
      document.getElementById("gender").value;

    const goal =
      document.getElementById("goal").value;

    const plan =
      document.getElementById("selectedPlan").value;

    const joinDate =
      document.getElementById("joinDate").value;

    const services =
      [...document.getElementById("servicesSelect").selectedOptions]
      .map(option => option.value)
      .join(", ");

    const message = `
DEO GYM Booking

Name: ${name}
Mobile: ${mobile}
Gender: ${gender}
Goal: ${goal}
Plan: ${plan}
Services: ${services}
Joining Date: ${joinDate}
`;

    const whatsappURL =
      `https://wa.me/917376704008?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });

// COUNTER
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const update = () => {

    const target = +counter.dataset.target;
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// LIGHTBOX
const galleryImages =
  document.querySelectorAll(".gallery-card img");

const lightbox =
  document.querySelector(".lightbox");

const lightboxImg =
  document.querySelector(".lightbox img");

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
