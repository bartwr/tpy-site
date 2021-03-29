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

function Academy() {
  return <div className="root">
    <Head>
      <title key="title">Academy | Technology Park Ypenburg</title>
      <meta key="og:title" property="og:title" content="Academy | Technology Park Ypenburg" />
      <meta key="og:image" property="og:image" content="https://www.thehaguetech.com/static/pages/community/meta.jpg" />
      <meta key="og:description" property="og:description" content="Build your network, build your business, and build your friendships all within our passionate community." />
      <meta key="description" name="description" content="Build your network, build your business, and build your friendships all within our passionate community." />
    </Head>

    <Navigation />

    <PageHeader
      smallCapsTitle="Academy"
      smallCapsTitleColor="white"
      title="TPY Academy"
      imageBk="/static/pages/community/community.jpg"
      image="https://i.imgur.com/bB8UO0W.png"
      style={{backgroundPosition: 'center top'}}
    />

    <IntroText>
      <p>
        The TPY Academy will be an initiator to build the connections between the businesses. We provide a multi company, multi industry perspective for students to experience and help in their career choices as well as helping current staff to grow in their skill sets and experience.
      </p>
    </IntroText>

    <div>
      <TextAndImage
        category=""
        image="https://i.imgur.com/bB8UO0W.png"
        imagePosition="right"
        title="A win-win for Schooling and Business"
        text="<p>For tech students, this is the place to grab the opportunity to enhance your ability and increase your career possibilities. Alongside gaining multiple or single company experience from our TPY companies. We want to encourage the development of talent no matter the stage of education or career. Our student programmes vary from thesis writing and internships to training and summer school.</p><p>Companies have the need to attract new talent and grow current talent. Our TPY companies benefit from the knowledge and talent of interns and graduated engineers, active in all contemporary fields of composites research. </p>"
      />
    </div>

    <div>
      <TextAndImage
        category=""
        image="https://i.imgur.com/bB8UO0W.png"
        imagePosition="left"
        title="Combing Sports with Business"
        text="<p>At TPY we believe that sport brings people together no matter their background or role. We arrange sport themed and fun events during the year for employees and Academy aligned students and schools. </p>"
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

export default Academy;
