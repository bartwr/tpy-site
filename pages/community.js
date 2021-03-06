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

const members = [
  {
    title: 'Exasun',
    url: 'https://exasun.com',
    image: 'exasun.svg'
  },
  {
    title: 'Unified International',
    url: 'https://unifiedinternational.net',
    image: 'unified-international.png'
  },
  {
    title: 'KVE',
    url: 'https://www.kve.nl',
    image: 'kve.jpg'
  },
  {
    title: 'Airborne',
    url: 'https://www.airborne.com',
    image: 'airborne.png'
  },
  {
    title: 'Promolding',
    url: 'https://www.promolding.nl/en/',
    image: 'promolding.jpg'
  },
  {
    title: 'GTM-AS',
    url: 'https://gtm-as.com',
    image: 'gtm.png'
  },
  // {
  //   title: 'InHolland',
  //   url: 'https://www.inholland.nl/',
  //   image: 'inholland.svg'
  // },
  {
    title: 'TU Delft',
    url: 'https://www.tudelft.nl/',
    image: 'tu-delft.svg'
  },
  {
    title: 'Hittech',
    url: 'https://hittech.com/en/',
    image: 'hittech.jpeg'
  },
  {
    title: 'Light Tree Ventures',
    url: 'https://www.lighttreeventures.com',
    image: 'lighttree.svg'
  },
  {
    title: 'Project Dragonfly',
    url: 'https://projectdragonfly.nl',
    image: 'project-dragonfly.jpg'
  },
  {
    title: 'QLayers',
    url: 'https://www.qlayers.com',
    image: 'qlayers.jpg'
  },
  {
    title: 'ZeroAvia',
    url: 'https://www.zeroavia.com',
    image: 'zero-avia.jpg'
  },
  {
    title: 'Chapter8',
    url: 'https://chapter8.com',
    image: 'chapter8.svg'
  },
  {
    title: 'Robin Radar',
    url: 'https://www.robinradar.com',
    image: 'robin.jpeg'
  },
  {
    title: 'SITA',
    url: 'https://www.sita.aero',
    image: 'sita.svg'
  },
  {
    title: 'Somni',
    url: 'https://www.somnisolutions.com',
    image: 'somni.webp'
  }
];

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
        Situated in the heart of the greater Rotterdam ??? The Hague area, TPY offers a unique place with innovative & collaborative high-tech companies.
      </p>
      <p>
        Our open community thrives to connect with the best of the best. Our community members focus on developing innovative solutions in the field of high-tech manufacturing through collaboration. Through collaboration and co-creation, innovative solutions have been developed in our community. Interested in what has been co-created so far by our members? Please visit our <a href="/happening">testimonial page</a>.
      </p>
      <p>
        Whether you're a start-up, scale up, a mature business or an international company we have a place to work, meet, learn & grow ready for you. Come visit our vibrant campus by <a href="/contact">booking a (virtual) tour</a> and see it for yourself! 
      </p>
    </IntroText>

    <div className="MembersOverview max-width">
      <div>
        <Title>
          Our members include
        </Title>
      </div>
      <div className="MembersOverview-logos flex flex-wrap text-center">
        {R.map((member) => {
          return <p className="MembersOverview-logo">
            <a href={member.url} target="_blank" title={member.title} style={{
              backgroundImage: `url("/static/pages/community/logos/${member.image}")`
            }}>
              <span hidden>{member.title}</span>
              <img src={`/static/pages/community/logos/${member.image}`} className="block" alt={'Logo ' + member.title} />
            </a>
          </p>
        }, members)}
      </div>
    </div>

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
      .max-width {
        margin: 0 auto;
        width: 649px;
        max-width: 100%;
        padding: 0 24px;
        position: relative;
      }
      .text-center {
        text-align: center;
      }
      .flex-wrap {
        flex-wrap: wrap;
      }
      .MembersOverview-logo {
        margin: 0 auto;
      }
      @media(min-width: 480px) {
        .MembersOverview-logo {
          width:49%;
        }
      }
      .MembersOverview-logo a {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .MembersOverview-logo a * {
        display: none;
      }
    `}</style>
  </div>
}

export default Community;
