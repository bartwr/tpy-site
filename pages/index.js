import { Component } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import sal from 'sal.js'

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
    imageHeight: 106
  },
  {
    title: 'acceleration & incubation',
    href: '#acceleration',
    image: '/static/components/carousel/tpy-icon-acceleration.svg',
    imageHeight: 120
  },
  {
    title: 'softlanding',
    href: '#softlanding',
    image: '/static/components/carousel/tpy-icon-softlanding.svg',
    imageHeight: 110
  },
  {
    title: 'co-creation',
    href: '#co-creation',
    image: '/static/components/carousel/tpy-icon-co-creation.svg',
    imageHeight: 118
  },
]

class App extends Component {
  componentDidMount() {
    sal();
  }
  render() {
    return <div className="root">
      <Head>
        <title>Technology Park Ypenburg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
      </Head>
      <Navigation />
      <VideoBanner />
      <IntroText
        data-sal-duration="300"
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease-in-out"
      >
        <p style={{
          fontWeight: '500'
        }}>
          Within our sustainable environment our open community thrives to connect with the best of the best. Together we focus on developing innovative solutions in the field of high-tech manufacturing.
        </p>
        <p>
          By sharing know-how, network and capital equipment we help each other flourish. We provide this through work space, events, networks and access to testing and inspection tooling. Whether you are a start up, scale up or a mature business, we can’t wait for you to join our growing community. 
        </p>
      </IntroText>
      <div>
        <div>
          <Title
            align="center"
            style={{padding: '0 30px'}}
            data-sal-duration="400"
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
          >
            What we can offer you
          </Title>
        </div>
        <div>
          <Carousel slides={slides} />
        </div>
        <TextAndImage
          image="/static/misc/two_women_talking_in_kitchen__07042021_TPY SPACES_Hani_HPM-06942.jpg"
          category="community"
          title="Community"
          text="The tight network of TPY consists of startups, scale-ups, schools, entrepreneurs, developers, universities and institutes, all cooperating. We’re always seeking to evolve, remain valued and innovate for today’s technology. Grow your business while working with awesome collaborators."
          buttonText="read more"
          buttonLink="/community"
          anchorName="community"
          />
        <TextAndImage
          image="/static/misc/making_space_bird_eye_view__07042021_TPY SPACES_Hani_HPM-07170.jpg"
          imagePosition="right"
          category="campus"
          title="Campus"
          text="The goal of our TPY Campus is to offer facilities and events to support all your needs, whether you’re a start up, scale up, a mature business or an international company. Our hub is located at a strong central position, in the middle of the ‘Manufacturing Industry’ in The Hague. Come visit our vibrant campus and see it for yourself. "
          buttonText="read more"
          buttonLink="/campus"
          anchorName="campus"
          />
        <TextAndImage
          image="/static/misc/shared_space_with_woman_working_and_women_chessing__07042021_TPY SPACES_Hani_HPM-06895.jpg"
          imagePosition="left"
          category="academy"
          title="Academy"
          text="Our virtual TPY Academy functions as a bridge between tech experts and learners. TPY partnered up with the local schools and universities, such as Delft University of Technology and University of Applied Sciences InHolland Composites, located less than 10 km away from our Campus."
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
          image="/static/misc/office_space_i_have_a_dream_peter__07042021_TPY SPACES_Hani_HPM-06945.jpg"
          imagePosition="right"
          category="Acceleration & incubation"
          title="Acceleration"
          text="Grow by Start-up or Scale-up working closely together and by cooperating with universities, knowledge institutes and government. TPY is the international hotspot for the development and manufacturing of products based on high-tech materials: composite and hybrid components in The Hague."
          buttonText="read more"
          buttonLink="/acceleration"
          anchorName="acceleration"
          />
      </div>
      <div>
        <TextAndImage
          image="/static/misc/man_working_in_office__07042021_TPY SPACES_Hani_HPM-07103.jpg"
          category="softlanding"
          title="Softlanding"
          text="Considering establishing your business in the heart of high tech? TPY offers a solution to help you set up your business in the Netherlands and our softlanding programme to access the Netherlands and European markets. We’ll introduce you to key stakeholders and connect you with experts in setting up legal entities. "
          buttonText="read more"
          buttonLink="/softlanding"
          anchorName="softlanding"
          />
      </div>
      <div>
        <TextAndImage
          image="/static/misc/couch_with_two_men_meeting__07042021_TPY SPACES_Hani_HPM-06992.jpg"
          imagePosition="right"
          category="co-creation"
          title="Co-creation"
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
          buttonLink="/contact"
          target="_top"
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
}

export default App;
