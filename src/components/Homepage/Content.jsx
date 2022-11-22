import React from 'react';
import { InboxIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Content() {
  return (
    <div className='bg-[#FBF8F6]'>
      <main>
        <div className='relative overflow-hidden pt-16 pb-32'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 h-4 bg-[#FBF8F6]'
          />
          {/* Pic left text right */}
          <div className='mt-12'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
                <div>
                  <div className='-mt-20'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Why Antyfilter?
                    </h2>
                    {/* <p className='mt-4 text-lg text-gray-500'>
                      We use continuous data streams from blocked regions to
                      monitor internet censorship and develope new technologies
                      suited for the moment, called Blueprints.
                    </p> */}
                    <p className='mt-4 text-lg text-gray-500'>
                      Antyfilter is an open ecosystem of verified and effective
                      methods ready to setup to circumvent internet censorship
                      in scale. It lets anyone create, run and share access to
                      their own VPN.
                    </p>

                    <p className='mt-4 text-lg text-gray-500'>
                      Antyfilter uses continuous data streams from blocked
                      regions to monitor internet censorship and develop new
                      technologies suited for the moment, called Blueprints.
                    </p>
                    <div className='mt-20'>
                      <a
                        href='#_'
                        class='group relative mt-6 inline-block text-lg'
                      >
                        <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                          <span class='absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3'></span>
                          <span class='ease absolute left-0 -ml-2 h-48 w-60 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                          <span class='relative'>Discover our solutions</span>
                        </span>
                        <span
                          class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                          data-rounded='rounded-lg'
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-20'>
                <div className='pr-4 sm:items-center md:mb-12 md:px-80 lg:relative lg:m-0 lg:h-96 lg:px-0'>
                  <img
                    className='lg:w-120 lg:h-70 md: hidden lg:absolute lg:right-0 lg:block'
                    src='https://iili.io/ykZkEG.png'
                    alt='Why Antyfilter'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto mb-32 px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Join our community
              </h2>
              <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
                Are you ready to build the future of internet access for the
                Iranian people?
              </p>
            </div>
          </div>

          {/* Lady with Giant Laptop */}

          {/* Pic right text left */}
          <div className='relative'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
                <div>
                  <div>
                    <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-rose-900'>
                      <p className='justify-center text-lg text-white'>1</p>
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Hackers
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      Help us develope tools and build protocols to build
                      accessand free internet. You can help by starting a VPN
                      server using one of these guides and protocols.
                    </p>
                    <div className='mt-6'>
                      <a
                        href='#_'
                        class='group relative mt-6 inline-block text-lg'
                      >
                        <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                          <span class='absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3'></span>
                          <span class='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                          <span class='relative'>Read more</span>
                        </span>
                        <span
                          class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                          data-rounded='rounded-lg'
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='mt-8 pt-6'></div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                  <img
                    className='hidden w-full lg:absolute lg:left-0 lg:block lg:h-full lg:w-auto lg:max-w-none'
                    src='https://iili.io/yvn40x.png'
                    alt='Lady with giant laptop'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Perv */}

          <div className='mt-12'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
                <div>
                  <div className='-mt-20'>
                    <div>
                      <span className='mb-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-rose-900'>
                        <p className='justify-center text-lg text-white'>2</p>
                      </span>
                    </div>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Providers
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      Help us develop tools and best practices to build access
                      to open and free internet. You can help by starting a VPN
                      server, using one of these guides and protocols:
                    </p>
                    <div className='mt-6'>
                      <a
                        href='#_'
                        class='group relative mt-6 inline-block text-lg'
                      >
                        <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                          <span class='absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3'></span>
                          <span class='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                          <span class='relative'>Read more</span>
                        </span>
                        <span
                          class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                          data-rounded='rounded-lg'
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
                <div className='pr-4 sm:items-center md:mb-12 md:px-80 lg:relative lg:m-0 lg:h-96 lg:px-0'>
                  <img
                    className='lg:w-120 lg:h-70 hidden lg:absolute lg:right-0 lg:block'
                    src='https://iili.io/yvIrhP.png'
                    alt='Distributors'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Screaming dude */}

          <div className='relative'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0'>
                <div>
                  <div>
                    <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-rose-900'>
                      <p className='justify-center text-lg text-white'>3</p>
                    </span>
                  </div>
                  <div className='mt-6'>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Distributor
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      Help us develop tools and best practices to build access
                      to open and free internet. You can help by starting a VPN
                      server, using one of these guides and protocols:
                    </p>
                    <div className='mt-6'>
                      <a
                        href='#_'
                        class='group relative mt-6 inline-block text-lg'
                      >
                        <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                          <span class='absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3'></span>
                          <span class='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                          <span class='relative'>Read more</span>
                        </span>
                        <span
                          class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                          data-rounded='rounded-lg'
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='mt-8 pt-6'></div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0'>
                  <img
                    className='hidden w-full lg:absolute lg:left-0 lg:block lg:h-full lg:w-auto lg:max-w-none'
                    src='https://iili.io/yvxJEb.png'
                    alt='Hear ye hear ye'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pure Shock */}

          <div className='mt-12'>
            <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
              <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0'>
                <div>
                  <div className='-mt-20'>
                    <div>
                      <span className='mb-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-800 bg-rose-900'>
                        <p className='justify-center text-lg text-white'>4</p>
                      </span>
                    </div>
                    <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Testers
                    </h2>
                    <p className='mt-4 text-lg text-gray-500'>
                      Help us develop tools and best practices to build access
                      to open and free internet. You can help by starting a VPN
                      server, using one of these guides and protocols:
                    </p>
                    <div className='mt-6'>
                      <a
                        href='#_'
                        class='group relative mt-6 inline-block text-lg'
                      >
                        <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900  px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                          <span class='absolute inset-0 h-full w-full rounded-lg bg-amber-300 px-5 py-3'></span>
                          <span class='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180'></span>
                          <span class='relative'>Read more</span>
                        </span>
                        <span
                          class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                          data-rounded='rounded-lg'
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
                <div className='pr-4 sm:items-center md:mb-12 md:px-80 lg:relative lg:m-0 lg:h-96 lg:px-0'>
                  <img
                    className='lg:w-120 lg:h-70 hidden lg:absolute lg:right-0 lg:block'
                    src='https://iili.io/yvAk2s.png'
                    alt='Holy S***'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
