
/**
 * WESLEY HACK CLUB - ENGINE CORE
 * Pure Vanilla JS Implementation
 */

// 1. Particle Background Logic
// Fix: Cast HTMLElement to HTMLCanvasElement to access getContext and width/height
const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');

let particles: Particle[] = [];
class Particle {
    // Fix: Declare class properties for TypeScript
    x: number = 0;
    y: number = 0;
    size: number = 0;
    speedX: number = 0;
    speedY: number = 0;
    color: string = '';

    constructor() {
        this.init();
    }
    init() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.95 ? '#39FF14' : '#111';
    }
    update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) this.init();
    }
    draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = Array.from({ length: Math.floor((canvas.width * canvas.height) / 10000) }, () => new Particle());
}

function animateParticles() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', resize);
resize();
animateParticles();

// 2. Scroll Reveal Observer
const observerOptions = { threshold: 0.1 };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Trigger counters if this is a counter section
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(c => animateCounter(c as HTMLElement));
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 3. Stats Counter Animation
function animateCounter(counter: HTMLElement) {
    const target = +(counter.getAttribute('data-target') || 0);
    const countText = counter.innerText;
    const count = +countText.replace('+', '');
    const speed = 200;
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + inc).toString();
        setTimeout(() => animateCounter(counter), 10);
    } else {
        counter.innerText = target + '+';
    }
}

// 4. Countdown Timer
function updateCountdown() {
    const now = new Date();
    // Get next Tuesday 1:15 PM
    let nextMeeting = new Date();
    nextMeeting.setDate(now.getDate() + (7 + 2 - now.getDay()) % 7);
    nextMeeting.setHours(13, 15, 0, 0);

    if (now > nextMeeting) {
        nextMeeting.setDate(nextMeeting.getDate() + 7);
    }

    // Fix: Subtraction of Date objects in TypeScript requires using getTime()
    const diff = nextMeeting.getTime() - now.getTime();
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const format = (n: number) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const secsEl = document.getElementById('secs');

    if (daysEl) daysEl.innerText = format(d);
    if (hoursEl) hoursEl.innerText = format(h);
    if (minsEl) minsEl.innerText = format(m);
    if (secsEl) secsEl.innerText = format(s);
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 5. Navbar and Mobile Menu
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('nav-scrolled');
        else navbar.classList.remove('nav-scrolled');
    }
});

if (mobileMenuBtn && mobileMenu) {
    (mobileMenuBtn as HTMLElement).onclick = () => mobileMenu.classList.remove('hidden');
}
if (closeMenuBtn && mobileMenu) {
    (closeMenuBtn as HTMLElement).onclick = () => mobileMenu.classList.add('hidden');
}
document.querySelectorAll('.mobile-link').forEach(link => {
    // Fix: Property 'onclick' does not exist on type 'Element'. Cast to HTMLElement.
    (link as HTMLElement).onclick = () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
    };
});

console.log("ENGINE_INITIALIZED: WESLEY HACK CLUB CORE READY");
