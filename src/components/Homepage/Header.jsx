import React from 'react';
import logoAsset from '@site/static/img/logo_v.png';
import clsx from 'clsx';

const styles = {
  logo: ['flex items-center'],
};

const headerLinks = [
  { name: 'Our Story', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Blog', href: '#' },
];

const finalLinks = [];

headerLinks.forEach((link) => {
  finalLinks.push(
    <li>
      <a
        href={link.href}
        class='block rounded py-2 pr-4 pl-3 text-gray-900 hover:bg-gray-100 dark:border-gray-900 dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-rose-900'
        aria-current='page'
      >
        {link.name}
      </a>
    </li>
  );
});

export function Header() {
  return (
    <nav class='no-border fixed top-0 left-0 z-20 flex w-full bg-[#FBF8F6] px-2 py-2.5 sm:px-4'>
      <div class='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='/' className={clsx(styles.logo)}>
          <img
            src={logoAsset}
            class='mr-3 h-6 sm:h-9'
            alt='Antyfilter Logo'
            width={180}
            height={44}
          />
        </a>
        <div class='flex items-center'>
          <div
            class='hidden w-full items-center justify-end md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <ul class='mt-4 mr-12 flex flex-col bg-transparent p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:text-sm md:font-medium'>
              {finalLinks}
            </ul>
          </div>
          <div class='flex md:order-2'>
            <button
              type='button'
              class='gray:focus:ring-blue-800 mr-3 rounded-lg bg-[#5E6179] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 md:mr-0'
            >
              Join us
            </button>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              class='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span class='sr-only'>Open main menu</span>
              <svg
                class='h-6 w-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
