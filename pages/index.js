import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Pavel, a software developer. I work at Wayfair, developing on the
          web, mostly on the frontend. I mostly work with React. We are learning
          all about Next.js in Epic Learning.
        </p>
        <p>
          My personal interests include my dog Duncan, BJJ, chess, and other
          stuff too.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <div className={utilStyles.imageContainer}>
        <div className={utilStyles.beforeImgMobile}>
          <Image
            priority
            src="/pg_browse_mobile_before.png"
            width={375}
            height={740}
          />
        </div>
        <div className={utilStyles.afterImgMobile}>
          <Image
            priority
            src="/pg_browse_mobile_after.png"
            width={375}
            height={740}
          />
        </div>
        <div className={utilStyles.beforeImg}>
          <Image
            priority
            src="/pg_browse_before.png"
            width={1429}
            height={933}
          />
        </div>
        <div className={utilStyles.afterImg}>
          <Image
            priority
            src="/pg_browse_after.png"
            width={1429}
            height={968}
          />
        </div>
        <div className={utilStyles.wowGifContainer}>
          <img className={utilStyles.wowGif} src="/wink-wow.gif" />
        </div>
      </div>
      <div className={utilStyles.emptySpacing}></div> */}
    </Layout>
  );
}
