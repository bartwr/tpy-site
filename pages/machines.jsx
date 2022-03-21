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
const MachinesOverview = dynamic(() => import('../components/machines-overview.js'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.js'));

function Community() {
  return <div className="root">
    <Head>
      <title>Machine Portal | Technology Park Ypenburg</title>
    </Head>
    <Navigation />
    <PageHeader
      smallCapsTitle="Machine Portal"
      smallCapsTitleColor="white"
      title="Rent a machine"
      image="/static/pages/machines/hero-image.png"
      style={{backgroundPosition: 'center top'}}
      />
    <div className="flex">
      <div className="w-1/4">
      </div>
      <div className="flex-1">
        <IntroText>
          Introduction text about the machine portal.
        </IntroText>
      </div>
    </div>
    <div className="flex">
      <div className="w-1/4">
        <MachinesFilter />
      </div>
      <div className="flex-1">
        <MachinesSearchBar />
        <MachinesOverview />
      </div>
    </div>
    <div>
      <NewsletterSubscribe />
    </div>
    <Footer />
  </div>
}

export default Community;
