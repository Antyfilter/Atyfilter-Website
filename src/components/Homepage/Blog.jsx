import React from 'react';

import {
  BanknotesIcon,
  CheckBadgeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const plans = [
  {
    title: 'Ecommerce Owners',
    featured: false,
    description:
      'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      {
        id: 1,
        value:
          'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
      },
    ],
    icon: BanknotesIcon,
  },
  {
    title: 'Startups are Shutting Down!',
    featured: true,
    description:
      'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      {
        id: 1,
        value:
          'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
      },
    ],
    icon: CheckBadgeIcon,
  },
  {
    title: 'Manufacturers and Companies',
    featured: false,
    description:
      'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      {
        id: 1,
        value:
          'Help us provide uncensored internet in Iran. Find your role to start helping. Help us provide uncensored internet in Iran. Find your role to start helping.',
      },
    ],
    icon: UsersIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Blog() {
  return (
    <div className='mt-0 bg-[#FBF8F6] py-8'>
      <main>
        <div>
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute bottom-0 hidden h-6 w-full bg-[#FBF8F6] lg:block'
            />
            {/* Cards */}
            <div className='relative mx-auto max-w-2xl justify-center px-4 pb-8 text-center sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0'>
              <div className='relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0'>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className='mx-5 flex flex-col rounded-2xl border-2 border-dashed border-gray-900 bg-white shadow-xl'
                  >
                    <div className='relative flex-1  px-6 pt-16 pb-8 md:px-8'>
                      <div className='top-0 inline-block justify-center rounded-xl border-2 border-rose-900 bg-[#874C62] p-5'>
                        <plan.icon
                          className='h-6 w-6 text-white '
                          aria-hidden='true'
                        />
                      </div>
                      <h3 className='mt-8 text-center text-xl font-medium text-gray-900'>
                        {plan.title}
                      </h3>
                      <p className='mt-4 text-center text-base text-gray-500'>
                        {plan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
