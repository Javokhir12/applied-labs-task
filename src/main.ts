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

const mainNavigationLinks = document.querySelector('#main-nav-links');
const hamburgerButton = document.querySelector<HTMLButtonElement>(
  '#mamburger-menu-btn'
);

hamburgerButton?.addEventListener('click', () => {
  const menuClasses = [
    'h-full',
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
