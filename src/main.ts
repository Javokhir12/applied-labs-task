import Glide from '@glidejs/glide';
import './style.css';

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  startAt: 0,
  breakpoints: {
    768: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
}).mount();

const lazyLoadedImages = document.querySelectorAll('[data-src="lazy"]');
const mainNavigationLinks = document.querySelector('#main-nav-links');
const hamburgerButton = document.querySelector<HTMLButtonElement>(
  '#mamburger-menu-btn'
);

hamburgerButton?.addEventListener('click', () => {
  const menuClasses = [
    'h-full',
    'w-1/3',
    'flex-col',
    'p-4',
    'bg-gray-900',
    'text-white',
    'absolute',
    'left-0',
    'top-24',
  ];

  if (mainNavigationLinks?.classList.contains('hidden')) {
    mainNavigationLinks.classList.remove('hidden');
    mainNavigationLinks.classList.add(...menuClasses);
  } else {
    mainNavigationLinks?.classList.add('hidden');
    mainNavigationLinks?.classList.remove(...menuClasses);
  }
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const highResWidth = 1171;
    const image = entry.target as HTMLImageElement;
    image.src = image.src.replace('&w=10&', `&w=${highResWidth}&`);

    observer.unobserve(image);
  });
}, {});

lazyLoadedImages.forEach((image) => {
  observer.observe(image);
});
