import { Component } from 'react';
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
const MachinesOverview = dynamic(() => import('../components/machines-overview'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.jsx'));
const MachineContactForm = dynamic(() => import('../components/machine-contact-form.jsx'));
const MachineSpecifications = dynamic(() => import('../components/machine-specifications.jsx'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const Button = dynamic(() => import('../components/button.js'));
const MachineDetailsComponent = dynamic(() => import('../components/machine-details'));

class MachineDetails extends Component {
  render() {
    return (
      <div className="root">
        <Head>
          <title>Machine Portal / Details | Technology Park Ypenburg</title>
        </Head>
        <Navigation />
        <div style={{height: '132px'}} />
        <MachineDetailsComponent />
        <FooterBanner
          title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
          buttonText="book a tour"
          buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
          target="_blank"
          />
        <div>
          <NewsletterSubscribe />
        </div>
        <Footer />
      </div>
    )
  }
}

export default MachineDetails;
