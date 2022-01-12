import dynamic from 'next/dynamic';
import { Component } from 'react';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const HappeningItem = dynamic(() => import('../components/happening-item.js'));

class News extends Component {
  static async getInitialProps({ query }) {
    // Get slug
    return { slug: query.slug };
  }
  render() {
    return <div className="NewsPage">
      <Head>
        <title key="title">News at Technology Park Ypenburg</title>
      </Head>
      <Navigation />
      <div style={{height: '132px'}} /> 
      <div>
        <HappeningItem slug={this.props.slug} />
      </div>
      <div>
        <BookATourBanner />
      </div>
      <div>
        <FooterBanner
          title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
          buttonText="book a tour"
          buttonLink="/contact"
          target="_top"
          />
      </div>
      <Footer />
    </div>
  }
}

export default News;
