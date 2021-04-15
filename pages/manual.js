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

function Manual() {
  return <div className="root">
    <Head>
      <title key="title">Manual | Technology Park Ypenburg</title>
    </Head>

    <Navigation />

    <PageHeader
      smallCapsTitle="Manual"
      smallCapsTitleColor="white"
      title="TPY Manual"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/academy/tpy-academy-header-image.jpg"
      style={{backgroundPosition: '71% 50%'}}
    />

    <IntroText>
      <p className="font-bold">
        On this page you find information on managing the TPY site.
      </p>
      <p>
        Most content on the TPY-site can be edited only using GitHub, done by website developers.
      </p>
      <p>
        The items on the "What is happening" page can be edited using <a href="https://app.contentful.com/spaces/gd4r2czdyuc3/entries" rel="external" target="_blank" title="Go to Contentful">Contentful</a>. In the video below you can see how this works. Or <a href="https://play.neoyogaonline.nl/videos/embed/fa9a34dd-c25d-4000-bc70-f8659710f771?autoplay=1" target="_blank">📹 view the video in full size</a>.
      </p>
    </IntroText>

    <div>
      <iframe className="mx-auto" style={{width: '980px', maxWidth: '100%', margin: '0 auto', display: 'block'}} height="540" sandbox="allow-same-origin allow-scripts allow-popups" src="https://play.neoyogaonline.nl/videos/embed/fa9a34dd-c25d-4000-bc70-f8659710f771" frameborder="0" allowfullscreen></iframe>
    </div>

    <div>
      <FooterBanner
        title="Go to Home"
        buttonText="go go go"
        buttonLink="/"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Manual;
