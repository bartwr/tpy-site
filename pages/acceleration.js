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

function Acceleration() {
  return <div className="root">
    <Head>
      <title key="title">Acceleration | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Acceleration | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>

    <Navigation />

    <PageHeader
      smallCapsTitle="Acceleration"
      smallCapsTitleColor="white"
      title="TPY Acceleration"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/acceleration/tpy-acceleration-and-incubation-header-image.jpg"
      style={{backgroundPosition: '10% 50%'}}
    />

    <IntroText>
      <p>
        With our ideal location, close to TU Delft, TNO and NLR amongst other industrial capabilities, TPY is an attractive environment for startup and mature companies to expand/grow their business and capabilities from. We facilitate cooperation between companies, academic institutions and the government.
      </p>
    </IntroText>

    <div>
      <TextAndImage
        category=""
        image="/static/misc/shared_space_with_woman_working_and_women_chessing__07042021_TPY SPACES_Hani_HPM-06895.jpg"
        imagePosition="right"
        title="Surrounded by knowledge"
        text="<p>By surrounding ourselves with facilities such as TU Delft Aerospace Structures & Materials Lab, InHolland Composites Lab, SAM | XL Automation & Digitization Center and DFC Digital Factory Composites Ypenburg, we encourage the companies of our hub to accelerate their businesses.</p>"
        />
    </div>

    <div>
      <FooterBanner
        title="Join our academy"
        buttonText="send us a message"
        buttonLink="/contact"
        />
    </div>

    <NewsletterSubscribe />

    <Footer />

  </div>
}

export default Acceleration;
