import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const FullWidthImage = dynamic(() => import('../components/full-width-image.js'));

function Community() {
  return <div className="root">
    <Head>
      <title key="title">Community | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Community | Technology Park Ypenburg" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/community/meta.jpg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Community"
      smallCapsTitleColor="white"
      title="Join our community"
      imageBk="/static/pages/community/community.jpg"
      image="https://i.imgur.com/bB8UO0W.png"
      style={{backgroundPosition: 'center top'}}
      />
    <IntroText>
      <p>
        Our members have access to meeting spaces, an automation & digitalisation lab, a large autoclave & CNC milling and various testing equipment. And last, but certainly not least, enjoy our relaxing space and sports facilities from table football to mini gym to computer games rooms. 
      </p>
      <p>
        Enthusiastic to become part of the movement of Technology Park Ypenburg, the heart of high-tech? Book your tour today and explore all of our opportunities. Join our co-created workshops, build up sustainable relationships with your fellow peers in tech and drop in to one of our many events we host each month. 
      </p>
    </IntroText>

    <div>
      <FooterBanner
        title="Interested?"
        buttonText="send us a message"
        buttonLink="/contact"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Community;
