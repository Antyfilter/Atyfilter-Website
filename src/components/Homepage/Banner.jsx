import React from 'react';

export function Banner() {
  return (
    <div className='w-full bg-transparent pt-16 pb-16'>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
        <div className='overflow-visible bg-transparent lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                <span className='block'>
                  Be part of building access to the open and free internet
                </span>
              </h2>
              <p className='mt-4 text-lg leading-'>
                Antyfilter makes it easy to create effective VPN servers, giving
                anyone access to the open and free internet.
              </p>
            </div>
            <div className='m-6 ml-0'>
              <button class='button button--primary'>Find your role</button>
            </div>
          </div>
          <div className='aspect-w-5 aspect-h-3 -mt-6 overflow-visible md:aspect-w-2 md:aspect-h-1'>
            <img
              className='translate-x-6 translate-y-6 transform object-left-top sm:translate-x-16 lg:translate-y-20'
              src='https://iili.io/yX7622.png'
              alt='Free Internet Banner'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
