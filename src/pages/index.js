import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'اینجا؛ شروع ماجرا',
    imageUrl: 'img/launch.svg',
    description: (
      <>
        با یونیتیکورن بدون هیچ پیش‌زمینه‌ای می‌توانید بازی‌سازی را آسان، سریع و اصولی بیاموزید و در ابتدای این مسیر قرار بگیرید.
      </>
    ),
  },
  {
    title: 'هر آن چه که لازم است بدانید',
    imageUrl: 'img/award.svg',
    description: (
      <>
        یونیتیکورن یکی از کامل‌ترین منابع فارسی آموزش بازی‌سازی است؛ آموزش کار با موتور ساخت بازی 🎮، کدنویسی بازی 🛠️ و طراحی گرافیکی 🎨 همه در یک مجموعه.
      </>
    ),
  },
  {
    title: 'کاملاً رایگان',
    imageUrl: 'img/gamer.svg',
    description: (
      <>
        تمام مطالب یونیتیکورن رایگان و اوپن سورس است :)
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`به ${siteConfig.title} خوش آمدید!`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro/passage')}>
              بازی‌سازم کن!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
