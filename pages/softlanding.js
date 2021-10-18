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
        image="/static/pages/softlanding/formula-student-team-delft.jpg"
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
        image="/static/pages/softlanding/TPY_Mayors_Visit_210907_HPM_UK_8.jpg"
        imagePosition="right"
        title="Introduction to key stakeholders"
      >
        <p>
          TPY can help you connect with innovative peers from the high tech manufacturing industry, including lightweight composites, plastics- and metal materials, assemblies design and production, mechatronics, and automation solutions. We also have an extensive network in the aviation-, space- and medical markets. TPY is a center of globalization and internationalization while still focusing on the importance of local ecosystems and communities around The Hague and the Netherlands.
        </p>
      </TextAndImage>
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/pages/softlanding/90627-CloseOutTPY-9.jpg"
        imagePosition="left"
        title="Connection to business establishment experts"
      >
        <p>
          TPY has extensive connections with business establishment experts, and together with these experienced experts we can see how we can best assist you in further developing your business. We work in closely together with InnovationQuarter and The Hague Business Agency. We can help connect you with companies experienced in helping companies establish their operations in the Netherlands, recruit talent and access funding stimulants that may help your businesses development. Joining TPY’s Softlanding Program is the quickest, easiest, and more comprehensive path to growing your business in The Netherlands, the gateway to Europe.
        </p>
      </TextAndImage>
    </div>

    <div>
      <TextAndImage
        category=""
        image="/static/pages/softlanding/07042021_TPY SPACES_Hani_HPM-06945.jpg"
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
        title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
        buttonText="book a tour"
        buttonLink="/contact"
      />
    </div>

    <NewsletterSubscribe />

    <Footer />

  </div>
}

export default Softlanding;
