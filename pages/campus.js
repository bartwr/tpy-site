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

function Campus() {
  return <div className="root">
    <Head>
      <title key="title">Campus | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Campus | Technology Park Ypenburg" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/community/meta.jpg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Campus"
      smallCapsTitleColor="white"
      title="TPY Campus"
      imageBk="/static/pages/community/community.jpg"
      image="https://loremflickr.com/1920/1280"
      />
    <IntroText>
      <p>
        The goal of our TPY Campus is to offer facilities and events to support all your needs with easy access and close to Den Haag. Whether you’re a start up, scale up, a mature business or an international company. Come visit our vibrant campus and see it for yourself.
      </p>
    </IntroText>

    <div>
      <TextAndImage
        category=""
        image="https://loremflickr.com/1200/800"
        imagePosition="right"
        title="TPY Community Centre"
        text="<p>Our TPY Community Center provides a great environment for meeting peers as well as facilities from flex desks to offices and meeting rooms and a conference area and conferencing facilities.</p><p>The heart of our Community Centre is where we, TPY companies, Friends of TPY, Start Ups and Scale Ups, come together. To co-create, inspire and brainstorm. </p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="https://loremflickr.com/1200/800"
        imagePosition="left"
        title="TPY Prototyping Centre"
        text="<p>Our Prototyping Centre is a maker space to try out your ideas. It provides access to further High-Tech manufacturing, testing and inspection tooling. We utilise in-house professional expertise, which can help you with your ideas or brainstorms.</p><p>Our tremendous know-how focusses on Materials and Hybrid Structures design and industrialisation of Thermoplastics, Plastics and Composites. We strive to have the highest levels in Standards for critical high-end markets like Aerospace, Defence, Space, Naval, Offshore and Medical. In our Prototyping Centre, we welcome Businesses, Start Ups and Student Teams.</p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="https://loremflickr.com/1200/800"
        imagePosition="right"
        title="TPY Scale-up & Innovation Centre"
        text="<p>Ready to enhance your business development and scale-up? Our Innovation Centre is the ideal next phase location to fulfil the following steps in your business. Set up to foster a competitive and collaborative environment for mature Start Ups and Scale Ups. We pride ourselves with our in-house experts, who are eager to assist you and have a strong knowledge in High-Tech manufacturing. </p>"
        />
    </div>

    <div>
      <TextAndImage
        category=""
        image="https://loremflickr.com/1200/800"
        imagePosition="left"
        title="Event spaces"
        text="<p>We offer spaces for events from 30 people up to 300 people to attend. Let us know your needs and we would be delighted to help make your event a success.</p>"
        />
    </div>

    <div>
      <FooterBanner
        title="Join us!"
        buttonText="book a tour"
        buttonLink="/contact"
        />
    </div>
    <NewsletterSubscribe />
    <Footer />
  </div>
}

export default Campus;
