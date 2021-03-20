import { Component } from 'react';
import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Logo = dynamic(() => import('../components/logo.js'));
const Button = dynamic(() => import('../components/button.js'));
const Text = dynamic(() => import('../components/text.js'));

class NewsletterSubscribe extends Component {
  render() {
    return <div className="NewsletterSubscribe">
      <div className="flex max-width">
        <div className="logo-wrapper">
          <Logo color="white" style={{
            width: '100%',
            height: 'auto'
          }} />
        </div>
        <div style={{
          maxWidth: '464px'
        }}>
          <div style={{
            padding: '1rem 0',
          }}>
            <Text color="white">
              <b style={{
                width: '100%'
              }}>
                Subscribe to our newsletter
              </b>
            </Text>
            <Text color="white">
              Stay up to date with the latest news, events, courses and workshops.
            </Text>
          </div>
          <Button href="/newsletter" style={{
            marginTop: '18px'
          }}>
            Subscribe
          </Button>
        </div>
      </div>
      <style jsx>{`
        .NewsletterSubscribe {
          padding: 3rem 1rem;
          background-color: #144372;
          color: #fff;
          font-size: 1rem;
        }
        @media (min-width: 480px) {
          .NewsletterSubscribe {
            padding: 10rem 0;
          }
        }
        .logo-wrapper {
          margin: 3rem 0 33px 0;
          height: 100%;
        }
        .flex {
          display: block;
        }
        @media(min-width: 480px) {
          .max-width {
            max-width: 1032px;
            margin: 0 auto;
          }
          .flex {
            display: flex;
            justify-content: space-between;
          }
          .logo-wrapper {
            height: 79px;
            margin: 22px 120px 0 0;
            width: 400px;
          }
        }
      `}</style>
    </div>
  }
}

export default NewsletterSubscribe;
