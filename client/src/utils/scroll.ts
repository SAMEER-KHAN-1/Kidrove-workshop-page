// Native smooth scrolling (CSS scroll-behavior / scrollIntoView) gets ignored
// when the user has "reduce motion" enabled at the OS or browser level, which
// makes the page jump instantly on some desktops. Animating the scroll position
// ourselves keeps the behaviour consistent everywhere.

const NAV_HEIGHT = 64;
const DURATION = 550;

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function animateTo(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  function step(now: number) {
    if (startTime === null) startTime = now;
    const progress = Math.min((now - startTime) / DURATION, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  animateTo(top);
}

export function scrollToTop() {
  animateTo(0);
}
