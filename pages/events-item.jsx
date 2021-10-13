import dynamic from 'next/dynamic';
import { Container } from 'next/app';
import { Component } from 'react';
import Head from 'next/head';
import absoluteUrl from 'next-absolute-url'
import fetch from 'node-fetch';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const EventsItemComponent = dynamic(() => import('../components/events-item.js'));

function HappeningItem({ data }) {
  const url = `${data.baseUrl}/event/${data.slug}`;
  let imageUrl = 'https://www.technologyparkypenburg.nl/static/og-image.jpg';
  if(data.smallImage && data.smallImage.fields && data.smallImage.fields.file && data.smallImage.fields.file.url) {
    imageUrl = 'https:' + data.smallImage.fields.file.url;
  }

  return <Container>
    <Head>
      <title key="title">{data.title} | Happening at Technology Park Ypenburg</title>
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={data.title} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:description" property="og:description" content={data.introText} />
      <meta key="description" name="description" content={data.introText} />
    </Head>
    <div className="HappeningItemPage">
      <Navigation />
      <div style={{height: '132px'}} /> 
      <div>
        <EventsItemComponent slug={data.slug} />
      </div>
      <div>
        <BookATourBanner />
      </div>
      <div>
        <FooterBanner
          title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
          buttonText="book a tour"
          buttonLink="/contact"
          target="_top"
          />
      </div>
      <Footer />
    </div>
  </Container>
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  // Get absolute URL
  const { origin } = absoluteUrl(context.req);
  const res = await fetch(`${origin}/api/events/${slug}`);
  const json = await res.json();
  let data = json.fields;
  data.baseUrl = origin;

  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default HappeningItem;
