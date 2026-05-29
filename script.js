/**
 * DEO GYM - Modern Elite Website Core Operations Blueprint Engine
 * Pure Native Vanilla ECMAScript System Implementation Core File
 */

document.addEventListener('DOMContentLoaded', () => {

    // Global Operational Elements Instantiations Matrix Maps
    const preloader = document.getElementById('preloader');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('back-to-top');

    /* ==========================================================================
       SITE PRELOADER AND ARCHITECTURAL INITIALIZATIONS
       ========================================================================== */
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }
    });

    // Fallback safe extraction trigger in case load mapping experiences bottlenecks
    setTimeout(() => {
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
        }
    }, 2500);

    /* ==========================================================================
       MOBILE NAVIGATION HAMBURGER SYSTEM DRAWER CONTROL
       ========================================================================== */
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Explicitly auto close mobile overlay drawers on structural anchor clicking events
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    /* ==========================================================================
       STICKY HEADER SCROLL PROCESSING DECK LAYERS
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Sticky Navbar state toggling
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to Top widget presence tracking
        if (scrollPosition > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Real-time navigation links active highlighting tracker matrix pipeline
        let currentSectionId = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to top scrolling execution binder logic setup map
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       INTERSECTION OBSERVER SCROLL REVEAL UTILITY IMPLEMENTATION
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Specific subset interception mapping checklist for triggering stats counters execution
                if (entry.target.classList.contains('about-wrapper') || entry.target.closest('.stats-grid-panel')) {
                    triggerCountersOnVisibility();
                }
                
                observer.unobserve(entry.target); // Kill tracking hook parameters once visually set
            }
        });
    }, {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => revealObserver.observe(element));

    /* ==========================================================================
       DYNAMIC STATS COUNTERS SYSTEM PIPELINE ARCHITECTURE
       ========================================================================== */
    let countersInitiated = false;
    
    function triggerCountersOnVisibility() {
        if (countersInitiated) return;
        countersInitiated = true;

        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(counter => {
            const targetMaxVal = parseInt(counter.getAttribute('data-target'), 10);
            const runtimeProgressionDuration = 2000; // Complete metrics transition window mapped in MS
            const trackingTickResolutionTime = 30; // Execution interval latency index variables 
            const totalRequiredSteps = runtimeProgressionDuration / trackingTickResolutionTime;
            const incrementalStepValue = targetMaxVal / totalRequiredSteps;
            
            let baselineCurrentValue = 0;
            
            const internalCounterTimer = setInterval(() => {
                baselineCurrentValue += incrementalStepValue;
                if (baselineCurrentValue >= targetMaxVal) {
                    counter.innerText = targetMaxVal;
                    clearInterval(internalCounterTimer);
                } else {
                    counter.innerText = Math.floor(baselineCurrentValue);
                }
            }, trackingTickResolutionTime);
        });
    }

    /* ==========================================================================
       MEMBERSHIP SELECTION AUTOFILL INTER-CONNECT LINK LOGIC
       ========================================================================== */
    const planSelectButtons = document.querySelectorAll('.plan-select-btn');
    const targetFormPlanField = document.getElementById('form-plan');
    const targetBookingSectionElement = document.getElementById('booking');

    planSelectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedPlanCardNode = event.target.closest('.pricing-card');
            if (selectedPlanCardNode && targetFormPlanField) {
                const capturedTargetPlanNameString = selectedPlanCardNode.getAttribute('data-plan');
                
                // Set native dropdown select match value parameters directly
                targetFormPlanField.value = capturedTargetPlanNameString;
                
                // Smoothly route viewport parameters to booking sequence anchor
                if (targetBookingSectionElement) {
                    targetBookingSectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    /* ==========================================================================
       INTERACTIVE MASS RATIO BMI REAL-TIME PROCESSING COMPUTATION SYSTEM
       ========================================================================== */
    const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
    const inputHeightElement = document.getElementById('bmi-height');
    const inputWeightElement = document.getElementById('bmi-weight');
    
    const bmiResultDisplayPanel = document.getElementById('bmi-result-display');
    const textScoreOutputSpan = document.getElementById('bmi-score-val');
    const textStatusOutputSpan = document.getElementById('bmi-status-val');
    const textAdviseOutputParagraph = document.getElementById('bmi-advise-copy');

    if (calculateBmiBtn) {
        calculateBmiBtn.addEventListener('click', () => {
            const rawHeightVal = parseFloat(inputHeightElement.value);
            const rawWeightVal = parseFloat(inputWeightElement.value);

            if (!rawHeightVal || !rawWeightVal || rawHeightVal <= 0 || rawWeightVal <= 0) {
                alert('Please register mathematically valid biometric dimensions within the calculation node.');
                return;
            }

            // Execute processing formulas matrix parameters calculations
            const processedHeightInMetersSquare = (rawHeightVal / 100) * (rawHeightVal / 100);
            const computedBmiScoreIndex = (rawWeightVal / processedHeightInMetersSquare).toFixed(1);

            textScoreOutputSpan.innerText = computedBmiScoreIndex;
            bmiResultDisplayPanel.classList.remove('id-hidden');

            // Strategy branch checks logic layout arrays matches user configuration rules mapping
            let statusTextLabel = '';
            let adviseCopyContentString = '';

            if (computedBmiScoreIndex < 18.5) {
                statusTextLabel = 'Underweight';
                statusTextLabelColor = '#ff3333';
                adviseCopyContentString = 'Join DEO GYM muscle gain programs to build strength and size.';
            } else if (computedBmiScoreIndex >= 18.5 && computedBmiScoreIndex <= 24.9) {
                statusTextLabel = 'Normal';
                statusTextLabelColor = '#00ff66';
                adviseCopyContentString = 'Maintain your physique and achieve aesthetic body goals at DEO GYM.';
            } else if (computedBmiScoreIndex >= 25 && computedBmiScoreIndex <= 29.9) {
                statusTextLabel = 'Overweight';
                statusTextLabelColor = '#ff9900';
                adviseCopyContentString = 'Join DEO GYM fat loss transformation programs for healthier fitness.';
            } else {
                statusTextLabel = 'Obese';
                statusTextLabelColor = '#ff002b';
                adviseCopyContentString = 'Join DEO GYM fat loss transformation programs for healthier fitness.';
            }

            textStatusOutputSpan.innerText = statusTextLabel;
            textStatusOutputSpan.style.color = statusTextLabelColor;
            textAdviseOutputParagraph.innerText = adviseCopyContentString;
        });
    }

    /* ==========================================================================
       ONLINE REGISTRATION VALIDATION ENGINE & WHATSAPP INTEGRATION LINK DECK
       ========================================================================== */
    const globalGymFormElement = document.getElementById('gym-booking-form');
    const configuredTargetWhatsAppNumberDestinationString = '7376704008';

    if (globalGymFormElement) {
        globalGymFormElement.addEventListener('submit', (submissionEvent) => {
            submissionEvent.preventDefault();

            // Extract all form fields values
            const clientName = document.getElementById('form-name').value.trim();
            const clientPhone = document.getElementById('form-phone').value.trim();
            const clientGender = document.getElementById('form-gender').value;
            const clientAge = document.getElementById('form-age').value.trim();
            const clientGoal = document.getElementById('form-goal').value.trim();
            const clientService = document.getElementById('form-services').value;
            const clientPlan = document.getElementById('form-plan').value;
            const clientDate = document.getElementById('form-date').value;
            const clientAddress = document.getElementById('form-address').value.trim();
            const clientMessage = document.getElementById('form-message').value.trim() || 'No explicit additional messages given.';

            // Structural functional checks parameters boundary controls
            if (!clientName || !clientPhone || !clientGender || !clientAge || !clientGoal || !clientDate || !clientAddress) {
                alert('Please guarantee all system mandatory registration matrix boundaries are fully filled out.');
                return;
            }

            // Create payload text with uniform, readable line spacing formatting
            const fullyConstructedMessagePayloadText = 
`⚡ *DEO GYM - ELITE MEMBERSHIP APPLICATION* ⚡

• *Full Name:* ${clientName}
• *Mobile Number:* ${clientPhone}
• *Gender:* ${clientGender}
• *Age:* ${clientAge} Years Old
• *Fitness Goal:* ${clientGoal}
• *Selected Service:* ${clientService}
• *Selected Membership Plan:* ${clientPlan}
• *Target Joining Date:* ${clientDate}
• *Residential Address:* ${clientAddress}
• *Client Notes:* ${clientMessage}`;

            // URL Encode the string payload
            const serializedUriStringQueryComponent = encodeURIComponent(fullyConstructedMessagePayloadText);
            const absoluteWhatsAppRedirectApiGatewayUrl = `https://api.whatsapp.com/send?phone=91${configuredTargetWhatsAppNumberDestinationString}&text=${serializedUriStringQueryComponent}`;

            // Safely open the structured WhatsApp link in a new tab browser context
            window.open(absoluteWhatsAppRedirectApiGatewayUrl, '_blank');
        });
    }

    /* ==========================================================================
       IMAGE LIGHTBOX VISUAL DECK PRESENTATION LAYER
       ========================================================================= */
    const lightboxModalElement = document.getElementById('lightbox-modal');
    const lightboxInnerImgNode = document.getElementById('lightbox-img');
    const lightboxCloseButtonNode = document.getElementById('lightbox-close');
    const interactiveGalleryCardsArray = document.querySelectorAll('.gallery-card');

    interactiveGalleryCardsArray.forEach(card => {
        card.addEventListener('click', () => {
            const imageChildSourceElement = card.querySelector('.gallery-img');
            if (imageChildSourceElement && lightboxModalElement && lightboxInnerImgNode) {
                lightboxModalElement.style.display = 'flex';
                lightboxInnerImgNode.src = imageChildSourceElement.src;
                lightboxInnerImgNode.alt = imageChildSourceElement.alt;
            }
        });
    });

    if (lightboxCloseButtonNode && lightboxModalElement) {
        lightboxCloseButtonNode.addEventListener('click', () => {
            lightboxModalElement.style.display = 'none';
        });

        // Close when clicking empty void tracking backdrop elements
        lightboxModalElement.addEventListener('click', (modalEvent) => {
            if (modalEvent.target === lightboxModalElement) {
                lightboxModalElement.style.display = 'none';
            }
        });
    }
});