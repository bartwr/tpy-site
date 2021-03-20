import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const VideoBanner = dynamic(() => import('../components/video-banner.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Carousel = dynamic(() => import('../components/carousel/carousel.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));

// Define Carousel slides
const slides = [
  {
    title: 'community',
    href: '#community',
    image: '/static/components/carousel/tpy-icon-community.svg',
    imageHeight: 106
  },
  {
    title: 'campus',
    href: '#campus',
    image: '/static/components/carousel/tpy-icon-campus.svg',
    imageHeight: 104
  },
  {
    title: 'academy',
    href: '#academy',
    image: '/static/components/carousel/tpy-icon-academy.svg',
    imageHeight: 104
  },
  {
    title: 'acceleration',
    href: '#acceleration',
    image: '/static/components/carousel/tpy-icon-acceleration.svg',
    imageHeight: 90
  },
  {
    title: 'softlanding',
    href: '#softlanding',
    image: '/static/components/carousel/tpy-icon-softlanding.svg',
    imageHeight: 108
  },
  {
    title: 'co-creation',
    href: '#co-creation',
    image: '/static/components/carousel/tpy-icon-co-creation.svg',
    imageHeight: 118
  },
]

function App() {
  return <div className="root">
    <Head>
      <title>Technology Park Ypenburg</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
    </Head>
    <Navigation />
    <VideoBanner />
    <IntroText>
      <p>
        <b>
          Within our sustainable environment our open community thrives to connect with the best of the best. Together we focus on developing innovative solutions in the field of high-tech manufacturing. 
        </b>
      </p>
      <p>
        By sharing know-how, network and capital equipment we help each other flourish. We provide this through work space, events, networks and access to testing and inspection tooling. Whether you are a start up, scale up or a mature business, we can’t wait for you to join our growing community. 
      </p>
    </IntroText>
    <div>
      <div>
        <Title align="center" style={{padding: '0 30px'}}>
          What we can offer you
        </Title>
      </div>
      <div>
        <Carousel slides={slides} />
      </div>
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        category="community"
        title="Header"
        text="The tight network of TPY consists of startups, scale-ups, schools, entrepreneurs, developers, universities and institutes, all cooperating. We’re always seeking to evolve, remain valued and innovate for today’s technology. Grow your business while working with awesome collaborators."
        buttonText="read more"
        buttonLink="/community"
        anchorName="community"
        />
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        imagePosition="right"
        category="campus"
        title="Header"
        text="The goal of our TPY Campus is to offer facilities and events to support all your needs. Whether you’re a start up, scale up, a mature business or an international company. Come visit our vibrant campus and see it for yourself. "
        buttonText="read more"
        buttonLink="/campus"
        anchorName="campus"
        />
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        imagePosition="left"
        category="academy"
        title="Header"
        text="Our Prototyping Centre is a maker space to try out your ideas. It provides access to further High-Tech manufacturing, testing and inspection tooling. We utilise in-house professional expertise, which can help you with your ideas or brainstorms. "
        buttonText="read more"
        buttonLink="/academy"
        anchorName="academy"
        />
    </div>
    <div>
      <BookATourBanner />
    </div>
    <br />
    <br />
    <div>
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        imagePosition="right"
        category="Acceleration & incubation"
        title="Header"
        text="Ready to enhance your business development and scale-up? Our Innovation Centre is the ideal next phase location to fulfil the following steps in your business. Set up to foster a competitive and collaborative environment for mature Start Ups and Scale Ups. We pride ourselves with our in-house experts, who are eager to assist you and have a strong knowledge in High-Tech manufacturing. "
        buttonText="read more"
        buttonLink="/acceleration"
        anchorName="acceleration"
        />
    </div>
    <div>
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        category="soft-landing"
        title="Header"
        text="Considering establishing your business in the heart of high tech? TPY offers a solution to help you set up your business in the Netherlands and our softlanding programme to access the Netherlands and European markets. We’ll introduce you to key stakeholders and connect you with experts in setting up legal entities. "
        buttonText="read more"
        buttonLink="/soft-landing"
        anchorName="soft-landing"
        />
    </div>
    <div>
      <TextAndImage
        image="https://loremflickr.com/1200/800"
        imagePosition="right"
        category="co-creation"
        title="Header"
        text="At TPY we work together on challenges, innovations and support to establish funding initiatives. We facilitate the processes of companies to connect to work together on common challenges, student hackathons/makeathons, set up innovation projects for products and processes and help find the appropriate local, regional, national and european funding initiatives to help accelerate your development."
        buttonText="read more"
        buttonLink="/co-creation"
        anchorName="co-creation"
        />
    </div>
    <div>
      <FooterBanner
        title="Come and see for your self what TPY has to offer you!"
        buttonText="book a tour"
        buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
        target="_blank"
        />
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <div>
      <Footer />
    </div>
  </div>
}

export default App;
