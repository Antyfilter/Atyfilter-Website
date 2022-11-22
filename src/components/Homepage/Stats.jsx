import React from 'react';

export function Stats() {
  return (
    <div className='bg-[#FBF8F6] pt-24 sm:pt-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our impact in numbers
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            So far, we have managed to make a change. We have
          </p>
        </div>
      </div>
      <div className='mt-10 bg-transparent pb-12 sm:pb-16'>
        <div className='relative'>
          <div className='absolute inset-0 h-1/2' />
          <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
              <dl className='rounded-lg bg-transparent sm:grid sm:grid-cols-4'>
                <div className='flex flex-col  p-6 text-center sm:border-0 '>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    Verified Solutions
                  </dt>
                  <dd className='text-gray_800 order-1 text-5xl font-bold tracking-tight'>
                    12
                  </dd>
                </div>
                <div className='flex flex-col  p-6 text-center sm:border-0 '>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    End Users
                  </dt>
                  <dd className='text-gray_800 order-1 text-5xl font-bold tracking-tight'>
                    1245
                  </dd>
                </div>
                <div className='flex flex-col  p-6 text-center sm:border-0'>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    Community Members
                  </dt>
                  <dd className='text-gray_800 order-1 text-5xl font-bold tracking-tight'>
                    32
                  </dd>
                </div>
                <div className='flex flex-col p-6 text-center sm:border-0 '>
                  <dt className='order-2 mt-2 text-lg font-medium leading-6 text-gray-500'>
                    Hours of free internet
                  </dt>
                  <dd className='text-gray_800 order-1 text-5xl font-bold tracking-tight'>
                    3.500
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
