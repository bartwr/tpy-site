import {type} from "ramda";

// require('dotenv').config();

import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import Head from 'next/head';
import React from 'react';
import App from 'next/app';
const contentful = require('contentful');

import './_app.css';

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   let story = null, event = null, landingPage = null;

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);

  //     // Init Contentful connection
  //     const client = await contentful.createClient( {
  //       space: SPACE_ID,
  //       accessToken: ACCESS_TOKEN
  //     });

  //     const splittedSlug = pageProps.slug ? pageProps.slug.split('/') : null;

  //     if (splittedSlug && splittedSlug.length > 1) {
  //       // Get event based on slug
  //       // event = await client.getEntries({
  //       //   content_type: 'event',
  //       //   'fields.slug': splittedSlug[1],
  //       //   limit: 1
  //       // })
  //       //   .then((entry) => entry.items[0])
  //       //   .catch(console.error);
  //     }

  //     // Get story based on slug
  //     // story = await client.getEntries({
  //     //   content_type: 'story',
  //     //   'fields.slug': pageProps.slug,
  //     //   limit: 1
  //     // })
  //     //   .then((entry) => entry.items[0])
  //     //   .catch(console.error);

  //     // Get landing page based on slug
  //     // landingPage = await client.getEntries({
  //     //   content_type: 'landingpage',
  //     //   'fields.slug': pageProps.slug,
  //     //   limit: 1
  //     // })
  //     //   .then((entry) => entry.items[0])
  //     //   .catch(console.error);
  //   }

  //   return { pageProps, story, event, landingPage }
  // }

  componentDidMount() {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.register("/sw.js")
    //     .catch(err => console.error("Service worker registration failed", err));
    // } else {
    //   console.log("Service worker not supported");
    // }
  }

  getMeta(props) {
    const { story, event, landingPage } = props;
    const imageBaseUrl = "https://images.contentful.com/";

    // Set default meta tags
    let meta = {
      imageUrl: 'https://www.technologyparkypenburg.nl/static/og-image.jpg',
      title: 'Join Technology Park Ypenburg',
      description: 'Team up and share your knowledge with like-minded technology peers in The Hague.',
      url: 'https://www.technologyparkypenburg.nl/',
    };

    // If this is a story, set story meta tags
    if(story) {
      meta.imageUrl = imageBaseUrl + story.fields.smallImage.fields.file.url.slice(23);
      meta.title = story.fields.title;
      if (typeof story.fields.longText !== 'undefined') {
        meta.description = story.fields.longText.split("\n")[0];
      }
      meta.url = `/happening/${story.fields.slug}`;
    }

    // If this is a event, set event meta tags
    if(event) {
      meta.imageUrl = imageBaseUrl + event.fields.smallImage.fields.file.url.slice(23);
      meta.title = event.fields.title;
      if (typeof event.fields.introText !== 'undefined') {
        meta.description = event.fields.introText;
      }
      meta.url = `/happening/${event.fields.slug}`;
    }

    // If this is a landing page, set landing page meta tags
    if(landingPage) {
      meta.imageUrl = imageBaseUrl + landingPage.fields.headerImage.fields.file.url.slice(23);
      meta.title = landingPage.fields.title;
      landingPage.fields.content.content.forEach((data) => {
        meta.description += data.content[0].value + ' ';
      });
    }

    return meta;
  }

  render() {
    const { Component, pageProps, story, event, landingPage, defaultView } = this.props;
    const meta = this.getMeta({story, event, landingPage});

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#0f2247"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta
              key="twitter:title"
              property="twitter:title"
              content={meta.title}
          />
          <meta
              key="twitter:image"
              property="twitter:image"
              content={meta.imageUrl}
          />
          <meta
              key="twitter:description"
              property="twitter:description"
              content={meta.description}
          />
          <meta
              key="twitter:card"
              property="twitter:card"
              content="summary"
          />

          <meta
            key="og:title"
            property="og:title"
            content={meta.title}
          />

          <meta
            key="og:image"
            property="og:image"
            content={meta.imageUrl}
          />

          <meta
            key="og:description"
            property="og:description"
            content={meta.description}
          />
          <meta
            key="description"
            name="description"
            content={meta.description}
          />

          <link href="/static/tht-favicon@2x.png" rel="icon" type="image/x-icon" />
          <script dangerouslySetInnerHTML={{
          __html: `const GOOGLE_SCRIPT = null;`}} />
          {/*<script src="https://cdn.tailwindcss.com"></script>*/}
        </Head>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          video, iframe {
            max-width: 100%;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            min-height: 100%;
          }
          html {
            overflow-x: hidden;
            overflow: auto;
          }
          body {
            font-size: 8px;
          }
          .root {
            overflow: hidden;
          }
          img {
            max-width: 100%;
          }
          .h-full {
            height: 100%;
          }
          p,
          li {
            font-family: "Montserrat", sans-serif;
            max-width: 100%;
            font-size: 16px;
            line-height: 24px;
          }
          @media(min-width: 480px) {
            p,
            li {
              font-size: 22px;
              line-height: 32px;
            }
          }
          p > :global(a) {
            color: #0E2F50;
            padding-bottom: 0;
            border-bottom: 1px solid rgba(15, 34, 72, 0.3);
            text-decoration: none;
          }
          p > :global(a:visited) {
            color: #0f2247;
          }
          .font-bold {
            font-weight: bold;
          }
          .text-center { text-align: center; }
          .mt-0 { margin-top: 0; }
          .px-2 { padding-right: 0.5rem; padding-left: 0.5rem; }
          .px-4 { padding-right: 1rem; padding-left: 1rem; }
          .flex {
            display: flex;
          }
          .flex-1 { flex: 1 } 
          .flex-column { flex-direction: column; }
          .flex-col { flex-direction: column; }
          .show-on-mobile-only { display: block }
          @media(min-width: 480px) { .show-on-mobile-only { display: none } }
          @media(max-width: 480px) { .show-on-desktop-only { display: none; }
        `}</style>
        <Component {...pageProps} />
      </>
    );
  }
}

// export async function getStaticProps({ params }) {
//
//   let story = null, event = null, landingPage = null;
//
//   // Init Contentful connection
//   const client = await contentful.createClient( {
//     space: SPACE_ID,
//     accessToken: ACCESS_TOKEN
//   });
//
//   if (typeof params.slug !== 'undefined') {
//     // Get story based on slug
//     story = await client.getEntries({
//       content_type: 'story',
//       'fields.slug': params.slug,
//       limit: 1
//     })
//         .then((entry) => entry.items[0])
//         .catch(console.error);
//
//     // Get event based on slug
//     event = await client.getEntries({
//       content_type: 'event',
//       'fields.slug': params.slug,
//       limit: 1
//     })
//         .then((entry) => entry.items[0])
//         .catch(console.error);
//
//     // Get landing page based on slug
//     landingPage = await client.getEntries({
//       content_type: 'landingpage',
//       'fields.slug': params.slug,
//       limit: 1
//     })
//         .then((entry) => entry.items[0])
//         .catch(console.error);
//   }
//
//   return {
//     props: {
//       pageProps,
//       story,
//       event,
//       landingPage
//     },
//   }
// }

export default MyApp;
