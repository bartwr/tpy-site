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

function About() {
  return <div className="About">
    <Head>
      <title>About | Technology Park Ypenburg</title>
    </Head>
    <Navigation />
    <div style={{height: '132px'}} /> 
    <div className="contact-wrapper">

      <div>
        <SmallCapsTitle>
          About us
        </SmallCapsTitle>
        <br />
        <Title size="small">
          TPY team
        </Title>
        <br />
        <br />

        <div className="flex justify-between flex-wrap">
          <div className="about-us-block">
            <img src="/static/pages/contact/stephen-hands.jpg" alt="Photo"
              data-sal-duration="400"
              data-sal="fade-in"
              data-sal-delay="300"
            />
            <h1>Stephen<br />Managing Director</h1>
            <p>
              <a href="https://www.linkedin.com/in/stephen-hands-0b669634/" target="_blank" rel="external">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn logo" width="40" className="linkedin-icon"
                data-sal-duration="400"
                data-sal="fade-in"
                data-sal-delay="300"
                />
              </a>
            </p>
          </div>
          <div className="about-us-block">
            <img src="/static/pages/contact/sophie-kochen.jpg" alt="Photo"
              data-sal-duration="400"
              data-sal="fade-in"
              data-sal-delay="300"
            />
            <h1>Sophie<br />Ecosystem Manager</h1>
            <p>
              <a href="https://www.linkedin.com/in/sophie-kochen-1a594468/" target="_blank" rel="external">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn logo" width="40" className="linkedin-icon"
                data-sal-duration="400"
                data-sal="fade-in"
                data-sal-delay="300"
                />
              </a>
            </p>
          </div>
          <div className="about-us-block">
            <img src="/static/pages/contact/delilah-dols.jpg" alt="Photo"
              data-sal-duration="400"
              data-sal="fade-in"
              data-sal-delay="300"
            />
            <h1>Delilah<br />Community Manager</h1>
            <p>
              <a href="https://www.linkedin.com/in/delilahdols/" target="_blank" rel="external">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn logo" width="40" className="linkedin-icon"
                data-sal-duration="400"
                data-sal="fade-in"
                data-sal-delay="300"
                />
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
    <BookATourBanner />
    <NewsletterSubscribe />
    <Footer />
    <style jsx>{`
      .About {
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

export default About;
