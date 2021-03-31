import { Component } from 'react';
import dynamic from 'next/dynamic';
import sal from 'sal.js'

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));

class VideoBanner extends Component {
  componentDidMount() {
    sal();
  }
  render() {
    const images = [
    ]
    const randomFromArray = (items) => items[Math.floor(Math.random()*items.length)]
    return <div className="VideoBanner">
      <img className="video" src={`/static/pages/index/tpy-home-header-image-01.jpg`} />
      <div className="overlay">
        <Title
          color="#fff"
          data-sal-duration="400"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
        >
          Join the best of our industry
        </Title>
        <div>
          <div
            className="subtitle"
            data-sal-duration="400"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-in-out"
            >
            Team up and share your knowledge with like-minded technology peers
          </div>
          <div
            className="button-wrapper"
            data-sal-duration="300"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
          >
            <Button
              href="/contact"
              target="_top"
              style={{margin: '0 auto'}}
            >
              Book a tour
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .VideoBanner {
          position: relative;
          color: #fff;
          width: 100%;
          height: 100%;
        }
        .video {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: calc(112px + 1rem) 10% 1rem 10%;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          background: rgba(0,0,0,0.2);
          text-align: center;
          font-size: 3rem;
          padding-bottom: 6rem;
        }
        @media (min-width: 480px) {
          .overlay {
            justify-content: flex-end;
            padding-top: 102px 10% 0 10%;
            padding-bottom: 74px;
          }
        }
        .subtitle {
          margin: 24px 0;
          min-height: 26px;
          color: #FFFFFF;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          padding: 0 10%;
        }
        @media(min-width: 480px) {
          .Title {
            text-shadow: 0 2px 17px rgba(0, 0, 0, 0.5);
          }
          .subtitle {
            font-size: 22px;
            line-height: 32px;
          }
        }
        .button-wrapper {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  }
}

export default VideoBanner;
