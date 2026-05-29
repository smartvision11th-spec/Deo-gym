document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // 2. Intersection Observer for Scroll Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 3. Pricing Auto-Fill Logic
    const planButtons = document.querySelectorAll('.plan-btn');
    const planSelect = document.getElementById('wa-plan');

    planButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedPlan = e.target.getAttribute('data-plan');
            planSelect.value = selectedPlan;
            // Scroll to form smoothly
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 4. WhatsApp Booking Form Integration
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Gather Values
        const name = document.getElementById('wa-name').value;
        const phone = document.getElementById('wa-phone').value;
        const gender = document.getElementById('wa-gender').value;
        const plan = document.getElementById('wa-plan').value;
        const date = document.getElementById('wa-date').value;
        const goal = document.getElementById('wa-goal').value;

        // WhatsApp Number provided in prompt
        const waNumber = '917376704008';

        // Format Message using URL Encoding (%0A is a line break)
        const waText = `*NEW GYM MEMBERSHIP INQUIRY*%0A%0A` +
                       `*Name:* ${name}%0A` +
                       `*Mobile:* ${phone}%0A` +
                       `*Gender:* ${gender}%0A` +
                       `*Plan Selected:* ${plan}%0A` +
                       `*Joining Date:* ${date}%0A` +
                       `*Goal:* ${goal}`;

        // Redirect to WhatsApp
        const waLink = `https://wa.me/${waNumber}?text=${waText}`;
        window.open(waLink, '_blank');
    });

    // 5. BMI Calculator Logic
    const calcBmiBtn = document.getElementById('calc-bmi');
    const bmiResultBox = document.getElementById('bmi-result');

    calcBmiBtn.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const heightCm = parseFloat(document.getElementById('bmi-height').value);

        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            bmiResultBox.style.display = 'block';
            bmiResultBox.innerHTML = `<span style="color:red;">Please enter valid height and weight.</span>`;
            return;
        }

        const heightM = heightCm / 100;
        const bmi = (weight / (heightM * heightM)).toFixed(1);
        
        let category = '';
        let suggestion = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            suggestion = 'Join DEO GYM muscle gain programs to build strength and size.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal';
            suggestion = 'Maintain your physique and achieve aesthetic body goals at DEO GYM.';
        } else {
            category = 'Overweight / Obese';
            suggestion = 'Join DEO GYM fat loss transformation programs for healthier fitness.';
        }

        bmiResultBox.style.display = 'block';
        bmiResultBox.innerHTML = `
            <h3>Your BMI: <span>${bmi}</span> (${category})</h3>
            <p style="margin-top:10px; font-size:0.9rem; color:#ccc;">${suggestion}</p>
        `;
    });
});