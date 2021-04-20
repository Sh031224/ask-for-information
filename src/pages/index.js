import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Head from "@docusaurus/Head";

const features = [
  {
    title: "기초부터 천천히",
    imageUrl: "img/undraw_stepping_up_g6oo.svg",
    description: (
      <>
        <code>ask-for-information</code> 을 통하여 여러 언어 / 프레임워크의 기초부터 천천히 쌓을 수 있습니다.
      </>
    )
  },
  {
    title: "모두 참여 가능",
    imageUrl: "img/undraw_building_websites_i78t.svg",
    description: (
      <>
        누구나 이 프로젝트에 <code>Github</code> 를 통하여 기여할 수 있습니다.
      </>
    )
  },
  {
    title: "경험 전달",
    imageUrl: "img/undraw_online_connection_6778.svg",
    description: <>기초적인 지식 뿐만아니라 이때까지 겪었던 경험도 같이 전달함으로써 보다 신뢰성 있는 정보를 제공합니다.</>
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
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

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <>
      <Head>
        <title>Ask for information</title>
        <meta name="description" content="모두 함께 만들어가는 코딩 지식" />
        <meta property="article:author" content="https://www.facebook.com/profile.php?id=100048700034135" />
        <meta property="article:pc_service_home" content="https://sh031224.github.io/ask-for-information/" />
        <meta property="article:mobile_service_home" content="https://sh031224.github.io/ask-for-information/" />
        <meta name="by" content="Sh031224" />
        <meta property="og:site_name" content="Ask-for-information" />
        <meta property="og:title" content="Ask-for-information" />
        <meta property="og:url" content="https://sh031224.github.io/ask-for-information/" />
        <meta property="og:description" content="모두 함께 만들어가는 코딩 지식" />
        <meta property="og:image" content="https://sh031224.github.io/ask-for-information/img/undraw_building_websites_i78t.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ask-for-information" />
        <meta name="twitter:url" content="https://sh031224.github.io/ask-for-information/" />
        <meta name="twitter:description" content="모두 함께 만들어가는 코딩 지식" />
        <meta name="twitter:image" content="https://sh031224.github.io/ask-for-information/img/undraw_building_websites_i78t.svg" />
      </Head>
      <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <img className={clsx(styles.heroBannerLogo, "margin-vert--md")} src={useBaseUrl("img/logo.svg")} />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className={clsx("button button--primary button--lg", styles.getStarted)} to={useBaseUrl("docs/")}>
                문서 확인하기 →
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
    </>
  );
}
