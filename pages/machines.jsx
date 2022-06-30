import {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import {fetchMachines} from '../helpers/machines.js';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Pricing = dynamic(() => import('../components/pricing.jsx'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const MachinesOverview = dynamic(() => import('../components/machines-overview.tsx'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.jsx'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));

function Machines() {
  // Get machine type filter from localStorage
  const machineTypeFilter = typeof window !== 'undefined' ? localStorage.getItem('TPY__machines_machine_type') : '';
  const machineTypeSearchQuery = typeof window !== 'undefined' ? localStorage.getItem('TPY__machines_search_query') : '';
  // State definitions
  const [searchQuery, setSearchQuery] = useState(machineTypeSearchQuery);
  const [machineType, setMachineType] = useState(machineTypeFilter);
  const [machines, setMachines] = useState([])

  const fetchMachinesAndStoreInState = async () => {
    const machineObjects = await fetchMachines();
    setMachines(machineObjects);
  }

  useEffect(() => {
    fetchMachinesAndStoreInState();
  }, [])

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
    <div className="flex flex-wrap sm:mx-4 max-width sm:mx-auto">
      <div className="sm:w-1/4">
      </div>
      <div className="w-full w-5/6 sm:w-3/4">
        <IntroText style={{
          marginLeft: '1rem',
          marginRight: '1rem',
          paddingLeft: 0,
          paddingRight: 0
        }}>
          <p>
            Technology Park Ypenburg and its members offer a wide range of machinery and facilities to help you build your prototypes, products or testing. The overview below shows you all the machines at TPY that are available to third parties, which are in need of these facilities. These machines can be rented and booked through this machine portal. Cost includes use of the machine, operators and/or programming staff, and if applicable materials. After filling out an inquiry, you will receive a fitting quotation.
          </p>
          <p>
            Most of the machines and facilities are focussed on composites and high-tech manufacturing and include an automation & digitalisation lab, large autoclaves, CNC milling machines and various testing equipment. All facilities are easily reachable and available for high tech manufacturing at TPY.
          </p>
          <p>
            Please feel free to inquire about the possibilities and a quotation through this machine portal. 
          </p>
        </IntroText>
      </div>
    </div>
    <div className="flex flex-wrap md:flex-nowrap sm:mx-4 mb-16 max-width sm:mx-auto px-4">
      <div className="
        w-full
        md:w-1/4
      ">
        <MachinesFilter machines={machines} machineType={machineType} onUpdate={setMachineType} />
      </div>
      <div className="
        w-full
        md:w-3/4
      ">
        <MachinesSearchBar onUpdate={setSearchQuery} />
        <MachinesOverview machines={machines} searchQuery={searchQuery} machineType={machineType} />
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
}

export default Machines;
