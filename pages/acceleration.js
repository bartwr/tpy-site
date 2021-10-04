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
      title="TPY Acceleration & Incubation"
      imageBk="/static/pages/community/community.jpg"
      image="/static/pages/acceleration/tpy-acceleration-and-incubation-header-image.jpg"
      style={{backgroundPosition: '10% 50%'}}
    />

    <IntroText>
      <p>
        With our ideal location, close to TU Delft, TNO, The Hague University of Applied Sciences and NLR amongst other industrial capabilities, TPY is an attractive environment for startup and mature companies to expand/grow their business and capabilities from. We facilitate cooperation between companies, academic institutions and the government.
      </p>
      <p>
        Students can easily access TPY, as our campus is conveniently located between The Hague and Delft. Come visit TPY by bike or take the bus or tram (tram stop Laan van Ypenburg)!
      </p>
      <p>
        Interested in becoming a part of the TPY Community? We got you covered! If you’re a   student you receive a 50% discount on your membership. This means you can become  a member of the TPY community for 28.50 p/m excl. 21% VAT! More information can   be found on our <a href="https://www.technologyparkypenburg.nl/pricing" target="_blank">Pricing</a> page.
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
      <div className="max-width">
        <Title size="large">
          Testimonals from projects in de Scale up & Innovation Center
        </Title>
      </div>

      <TextAndImage
        image="/static/pages/acceleration/sander-althuis-tu-delft.jpg"
        category=""
        title="Sander Althuis"
      >
        <div>
          Finance & Supply Chain Manager DUT21
        </div>
        <div>
          Formula Student Team Delft 
        </div>
        <div>
          <p>
            "As the Formula Student Team Delft we have built our carbon fibre monocoque in the Scale Up & Innovation Center. It was great to be surrounded by other teams and companies doing similar production, so we could exchange knowledge and help each other. After our monocoque was finished we assembled our electric racecar, in order to participate in the international Formula Student competitions in the summer of 2021. We have so far won the Engineering Design and Cost & Manufacturing event at Formula Student Netherlands, and are ready to race for more prizes at the Red Bull Ring and the Hockenheimring!
          </p>
          <p>
            We are looking forward to build our next autonomous racecar at the facilities that TPY has to offer." 
          </p>
        </div>
      </TextAndImage>

      <TextAndImage
        image="/static/pages/acceleration/arnold-koetje-inholland.jpg"
        imagePosition="right"
        category=""
        title="Arnold Koetje"
      >
        <div>
          Manager Applied Sciences Labs Aeronautical- and Precision Engineering
        </div>
        <div>
          Inholland Delft University of Applied Sciences
        </div>
        <div>
          <p>
            "We chose TPY as an integration location because of the access to manufacturing possibilities and composites expertise. Given the proximity of the Campus in Delft, it is an extremely suitable location for Inholland to further develop innovation projects in a safe and applied environment."
          </p>
        </div>
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

    <style jsx>{`
      .max-width {
        padding: 140px 12px;
        width: 800px;
        max-width: 100%;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

export default Acceleration;
