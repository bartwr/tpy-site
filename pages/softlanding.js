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

function Softlanding() {
  return <div className="root">
    <Head>
      <title key="title">Softlanding | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Softlanding | Technology Park Ypenburg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>

    <Navigation />

    <PageHeader
      smallCapsTitle="Softlanding"
      smallCapsTitleColor="white"
      title="TPY Softlanding"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/softlanding/tpy-softlanding-header-image.jpg"
      style={{backgroundPosition: '17% 50%'}}
    />

    <IntroText>
      <p>
        Considering establishing your business in the heart of high tech? TPY offers a solution to help you set up your business in the Netherlands and our softlanding programme to access the Netherlands and European markets. We’ll introduce you to key stakeholders and connect you with experts in setting up legal entities. 
      </p>
    </IntroText>

    <div>
      <TextAndImage
        category=""
        image="/static/misc/making_space_bird_eye_view__07042021_TPY SPACES_Hani_HPM-07170.jpg"
        imagePosition="right"
        title="Why Ypenburg?"
      >
        <p>
          Situated in the heart of the greater Rotterdam – The Hague area, TPY offers a strategic place with an innovative cluster of collaborative high-tech companies. The greater Rotterdam – The Hague area has been the birthplace of the development of world renown composite materials for the aviation, space and wind energy industries. This unique ecosystem makes the area an appealing location at regional, national and international levels.
        </p>
      </TextAndImage>
    </div>

    <div>
      <TextAndImage
        category=""
        image=""
        imagePosition="left"
        title=""
      >
        <p>
          In addition, the region is home to the complete chain of academic research & knowledge institutes such as TU Delft, InHolland Aeronautical Engineering and Leiden University.
        </p>
        <p>
          Located along the A4 and A12 highways offering direct access to the rest of the Netherlands, Belgium and Germany. Amsterdam Schiphol Airport and Rotterdam Harbour can both be reached in less than 30 minutes. Fun fact: the area where Technology Park Ypenburg is located, was developed as an airport in 1936.
        </p>
      </TextAndImage>
    </div>

    <div>
      <TextAndImage
        category=""
        image=""
        imagePosition="right"
        title="Virtual office"
      >
        <p>
          TPY also offers a ‘Virtual Office Membership’, which is a membership with business address. With this membership you can have the ability to start operating your business in The Netherlands, as you can use our business address to register at the Dutch Chamber of Commerce (KvK). You will have a mailbox at Laan van Ypenburg 108 in The Hague plus the possibility to use the membership area at the TPY Community Center. If you are not able to come to our physical location to pick up the mail, it is optional to have your mail forwarded once or twice a month.
        </p>
        <p>
          Interested in a Virtual Office Membership? Please take a look at our <a href="https://www.technologyparkypenburg.nl/pricing" target="_blank">Pricing</a>.
        </p>
      </TextAndImage>
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

export default Softlanding;
