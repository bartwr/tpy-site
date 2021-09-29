import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as R from 'ramda';

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
const MembersOverview = dynamic(() => import('../components/members-overview.js'));

function Community() {
  return <div className="root">
    <Head>
      <title key="title">Community | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Community | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Community"
      smallCapsTitleColor="white"
      title="Join our community"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/community/tpy-community-header-image.jpg"
      style={{backgroundPosition: '35% 50%'}}
      />

    <IntroText>
      <p>
         Our members have access to meeting spaces, an automation & digitalisation lab, a large autoclaves & CNC milling machines and various testing equipment among many other easily reachable high tech manufacturing capabilities at TPY.
      </p>
      <p>
        Situated in the heart of the greater Rotterdam – The Hague area, TPY offers a unique place with innovative & collaborative high-tech companies.
      </p>
      <p>
        Our open community thrives to connect with the best of the best. Our community members focus on developing innovative solutions in the field of high-tech manufacturing through collaboration. Through collaboration and co-creation, innovative solutions have been developed in our community. Interested in what has been co-created so far by our members? Please visit our <a href="/happening">testimonial page</a>.
      </p>
      <p>
        Whether you're a start-up, scale up, a mature business or an international company we have a place to work, meet, learn & grow ready for you. Come visit our vibrant campus by <a href="/contact">booking a (virtual) tour</a> and see it for yourself! 
      </p>
    </IntroText>

    <MembersOverview />

    <div>
      <FooterBanner
        title="Interested?"
        buttonText="send us a message"
        buttonLink="/contact"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
    <style jsx>{`
    `}</style>
  </div>
}

export default Community;
