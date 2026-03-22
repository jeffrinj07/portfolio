/* JavaScript for Jeffrin J Portfolio */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Animation
    const typingText = document.getElementById('typing-text');
    const phrases = ["Intelligent IoT Solutions", "AI-Powered Systems", "Innovative Embedded Designs", "Real-world Impactful Projects"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // 4. Reveal on Scroll
    const revealElements = document.querySelectorAll('section, .p-6, .p-8');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // 5. Modal Logic
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const viewButtons = document.querySelectorAll('.view-case-study');

    function openModal(card) {
        // Populate modal data
        document.getElementById('modal-title').textContent = card.dataset.title;
        document.getElementById('modal-img').src = card.dataset.img;
        document.getElementById('modal-problem').textContent = card.dataset.problem;
        document.getElementById('modal-approach').textContent = card.dataset.approach;
        document.getElementById('modal-impact').textContent = card.dataset.impact;

        // Populate tags
        const stackList = document.getElementById('modal-stack');
        stackList.innerHTML = '';
        card.dataset.stack.split(',').forEach(tech => {
            const span = document.createElement('span');
            span.className = 'modal-tag';
            span.textContent = tech.trim();
            stackList.appendChild(span);
        });

        // Populate features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        card.dataset.features.split(',').forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature.trim();
            featuresList.appendChild(li);
        });

        // Show modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.classList.add('show');
            document.body.classList.add('modal-open');
        }, 10);
    }

    function closeModal() {
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex', 'show', 'hide');
            document.body.classList.remove('modal-open');
        }, 300);
    }

    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            openModal(card);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // 6. Form Submission (UI Only)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        
        btn.disabled = true;
        btn.textContent = 'Sending...';
        
        // Simulate sending
        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.classList.replace('bg-gradient-to-r', 'bg-green-600');
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.replace('bg-green-600', 'bg-gradient-to-r');
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
});
