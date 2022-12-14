import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// import { Header } from '../components/Homepage/Header';
import { Banner } from '../components/Homepage/Banner';

import { Problem } from '../components/Homepage/Problem';
import { Blog } from '../components/Homepage/Blog';
import { Stats } from '../components/Homepage/Stats';
import { Content } from '../components/Homepage/Content';
// import { Footer } from '../components/Homepage/Footer';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/docs/intro">
    //         Docusaurus Tutorial - 5min ⏱️
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header className='bg-blue-500'>
      <div className='container mx-auto text-center py-24'>
        <h1 className='text-4xl font-bold text-white'>{siteConfig.title}</h1>
        <p className='text-xl py-6 text-white'>{siteConfig.tagline}</p>

        <div className='py-10'>
          <Link
            className='bg-white rounded-md text-gray-500 px-4 py-2'
            to='/docs/intro'
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      {/* <HomepageHeader /> */}

      <main>
        <Banner />
        {/* <Problem /> */}
        {/* <Blog /> */}
        {/* <Stats /> */}
        <Content />
      </main>
    </Layout>
  );
}
