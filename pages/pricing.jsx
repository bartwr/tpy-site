import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Pricing = dynamic(() => import('../components/pricing.jsx'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const Footer = dynamic(() => import('../components/footer.js'));

function Community() {
  return <div className="root">
    <Head>
      <title>Pricing | Technology Park Ypenburg</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Become a member"
      smallCapsTitleColor="white"
      title="Become a member of Technology Park Ypenburg"
      image="https://i.imgur.com/bB8UO0W.png"
      style={{backgroundPosition: 'center top'}}
      />
    <div>
      <Pricing />
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
  </div>
}

export default Community;
