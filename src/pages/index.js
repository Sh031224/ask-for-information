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
    title: "지식 향상",
    imageUrl: "img/undraw_stepping_up_g6oo.svg",
    description: (
      <>
        <code>ask-for-information</code> 으로 코딩 지식 또는 학교에 대한 정보를 학습할 수 있습니다.
      </>
    )
  },
  {
    title: "모두 참여 가능",
    imageUrl: "img/undraw_building_websites_i78t.svg",
    description: (
      <>
        누구나 대구소프트웨어마이스터고등학교를 거쳐갔다면, 이 프로젝트에 <code>Github</code> 를
        통하여 기여할 수 있습니다.
      </>
    )
  },
  {
    title: "경험 전달",
    imageUrl: "img/undraw_online_connection_6778.svg",
    description: (
      <>
        실제로 경험한 내용만을 전달하기 때문에 보다 신뢰성 있는 정보를 제공합니다. 또한 신입생
        입시에도 필요한 자료를 공유합니다.
      </>
    )
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
        <meta
          name="description"
          content="대구소프트웨어마이스터고등학교 학생들의 위키백과 서비스입니다."
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/profile.php?id=100048700034135"
        />
        <meta
          property="article:pc_service_home"
          content="https://sh031224.github.io/ask-for-information/"
        />
        <meta
          property="article:mobile_service_home"
          content="https://sh031224.github.io/ask-for-information/"
        />
        <meta name="by" content="Sh031224" />
        <meta property="og:site_name" content="Ask-for-information" />
        <meta property="og:title" content="Ask-for-information" />
        <meta property="og:url" content="https://sh031224.github.io/ask-for-information/" />
        <meta
          property="og:description"
          content="대구소프트웨어마이스터고등학교 학생들의 위키백과 서비스입니다."
        />
        <meta
          property="og:image"
          content="https://sh031224.github.io/ask-for-information/img/undraw_builing_websites_i78t.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ask-for-information" />
        <meta name="twitter:url" content="https://sh031224.github.io/ask-for-information/" />
        <meta
          name="twitter:description"
          content="대구소프트웨어마이스터고등학교 학생들의 위키백과 서비스입니다."
        />
        <meta
          name="twitter:image"
          content="https://sh031224.github.io/ask-for-information/img/undraw_building_websites_i78t.svg"
        />
      </Head>
      <Layout title={`${siteConfig.title}`}>
        <header className={clsx("hero", styles.heroBanner)}>
          <div className="container">
            <img
              className={clsx(styles.heroBannerLogo, "margin-vert--md")}
              src={useBaseUrl("img/logo.svg")}
              alt={siteConfig.title}
            />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx("button button--primary button--lg", styles.getStarted)}
                to={useBaseUrl("docs/")}
              >
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
