import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={siteConfig.tagline}>
            <header className={clsx('hero', styles.heroBanner)}>
                <div className="container" style={{
                    paddingTop: '10vh',
                }}>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">
                        {/* {siteConfig.tagline} */}
                        A crash course in structural causal inference.
                    </p>
                </div>
            </header>
            <main>
                <div className={styles.buttons}>
                    <Link
                        className={clsx("button button--secondary button--lg", styles.button)}
                        to={"/intro"}>
                            To Course
                    </Link>
                    <Link
                        className={clsx("button button--secondary button--lg", styles.button)}
                        to="/about">
                            About
                    </Link>
                </div>
            </main>
        </Layout>
    );
}
