import dynamic from 'next/dynamic';
import { Component } from 'react';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const HappeningItemComponent = dynamic(() => import('../components/happening-item.js'));

class HappeningItem extends Component {
  static async getInitialProps({ query }) {
    // Get slug
    return { slug: query.slug };
  }
  render() {
    return <div className="HappeningItemPage">
      <Head>
        <title key="title">Happening at Technology Park Ypenburg</title>
      </Head>
      <Navigation />
      <div style={{height: '132px'}} /> 
      <div>
        <HappeningItemComponent slug={this.props.slug} />
      </div>
      <div>
        <BookATourBanner />
      </div>
      <div>
        <FooterBanner
          title="Come and see for your self what Technology Park Ypenburg has to offer you!"
          buttonText="book a tour"
          buttonLink="/contact"
          target="_top"
          />
      </div>
      <Footer />
    </div>
  }
}

export default HappeningItem;
