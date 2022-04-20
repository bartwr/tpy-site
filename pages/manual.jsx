import dynamic from 'next/dynamic';
import Head from 'next/head';

// Load components
const Navigation = dynamic(() => import('../components/navigation.jsx'));
const ImageBanner = dynamic(() => import('../components/image-banner.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const TextAndImage = dynamic(() => import('../components/text-and-image.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const BookATourBanner = dynamic(() => import('../components/book-a-tour-banner.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const Timeline = dynamic(() => import('../components/timeline.js'));
const NewsletterSubscribe = dynamic(() => import('../components/newsletter-subscribe.js'));
const ContactForm = dynamic(() => import('../components/contact-form.js'));

function Manual() {
  return <div className="Contact">
    <Head>
      <title>Manual | Technology Park Ypenburg</title>
    </Head>
    <Navigation />
    <div style={{height: '132px'}} /> 
    <div className="mb-64 max-width mx-auto">

      <Title>
        Manual
      </Title>

      <br />

      <Title size="small">
        Managing companies
      </Title>

      <ol className="my-4 list-decimal pl-6">
        <li>Login into <a href="https://app.contentful.com" target="_blank">https://app.contentful.com</a></li>
        <li>Click <b>Content</b> in the top navigation bar</li>
        <li>Select Content Type <b>Companies</b></li>
      </ol>

      <Title size="small">
        Managing machines
      </Title>

      <ol className="my-4 list-decimal pl-6">
        <li>Login into <a href="https://app.contentful.com" target="_blank">https://app.contentful.com</a></li>
        <li>Click <b>Content</b> in the top navigation bar</li>
        <li>Select Content Type <b>Machines</b></li>
      </ol>

    </div>
    <Footer />
    <style jsx>{`
      .Contact {
      }
      .contact-wrapper {
        width: 1245px;
        max-width: 100%;
        padding: 0 18px;
        margin: 0 auto;
        margin-top: 4rem;
      }
      .about-us-block {
        width: 300px;
      }
      .about-us-block h1 {
        color: rgb(20, 67, 114);
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        min-height: 96px;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
      }
      .about-us-block .linkedin-icon {
        width: 40px;
        display: block;
        margin: 0 auto;
      }
    `}</style>
  </div>
}

export default Manual;
