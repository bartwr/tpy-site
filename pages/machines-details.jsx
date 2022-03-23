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
const MachinesOverview = dynamic(() => import('../components/machines-overview.js'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.js'));
const MachineContactForm = dynamic(() => import('../components/machine-contact-form.jsx'));
const MachineSpecifications = dynamic(() => import('../components/machine-specifications.jsx'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const Button = dynamic(() => import('../components/button.js'));

class MachineDetails extends Component {
  render() {
    return (
      <div className="root">
        <Head>
          <title>Machine Portal / Details | Technology Park Ypenburg</title>
        </Head>
        <Navigation />
        <div style={{height: '132px'}} />
        <div className="flex flex-wrap md:flex-nowrap px-4 mb-16 max-width sm:mx-auto">
          <div className="
            w-full
            md:w-2/5
            md:pr-4
          ">
            <div className="my-2">
              <SmallCapsTitle color="#14B586">
                assembly
              </SmallCapsTitle>
            </div>
            <Title>
              Cleanroom for solar panel assembly
            </Title>
            <div className="my-2">
              <p>
                Hardwall cleanroom with different zones and classes. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="my-16">
              <MachineSpecifications machine={this.props.machine} />
            </div>

            <Button href="#">
              Contact
            </Button>
          </div>
          <div className="
            mt-8
            md:mt-8
            w-full
            md:w-3/5
            md:pl-4
          ">
            <MachineContactForm machine={this.props.machine} />

            <img src="https://i.imgur.com/83Ovq2V.jpeg" />

            <div className="my-8">
              <p>
                <b>Description:</b><br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
        <div className="max-width px-4 md:px-0 md:mx-auto">
          <Title>More machines</Title>
          
          <div className="
            flex flex-wrap md:flex-nowrap mt-6 mb-16
            max-width sm:mx-auto
          ">
            <div className="
              w-full
            ">
              <MachinesSearchBar />
              <MachinesOverview />
            </div>
          </div>

        </div>
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
