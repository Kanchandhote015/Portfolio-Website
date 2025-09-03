// -------------------- Typed.js Animation --------------------
var typed = new Typed('#element', {
    strings: ['Student', 'Tech Enthusiast', 'Data Explorer', 'Design Creator'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// -------------------- Smooth Scroll for Nav Links --------------------
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// -------------------- Active Section Highlight on Scroll --------------------
const sections = document.querySelectorAll('main section, main h1');
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100; // offset for header
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.id || sec.nextElementSibling?.id;
        if(scrollPos >= top && scrollPos < top + height){
            navLinks.forEach(link => link.classList.remove('active'));
            if(id){
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if(activeLink) activeLink.classList.add('active');
            }
        }
    });
});

// -------------------- Skill Bar Animation on Scroll --------------------
function animateSkills() {
    const triggerBottom = window.innerHeight - 50;
    skillFills.forEach(fill => {
        const fillTop = fill.getBoundingClientRect().top;
        if (fillTop < triggerBottom) {
            fill.style.width = fill.getAttribute('data-width'); // use custom attribute
        } else {
            fill.style.width = '0%';
        }
    });
}

// -------------------- Project Card Hover Effects --------------------
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.style.zIndex = 10);
    card.addEventListener('mouseleave', () => card.style.zIndex = 1);
});

// -------------------- Contact Form Validation --------------------
const contactForm = document.querySelector('.contact-center form');
contactForm.addEventListener('submit', e => {
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if(!name || !email || !message){
        e.preventDefault();
        alert('Please fill in all fields!');
    }
});

// -------------------- Footer Scroll Effect (Optional) --------------------
const footer = document.querySelector('.footer');
window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight > footer.offsetTop + 50){
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    } else {
        footer.style.opacity = '0.5';
        footer.style.transform = 'translateY(20px)';
    }
});
