import dynamic from 'next/dynamic';

// Load components
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));

function VideoBanner() {
  const images = [
  ]
  const randomFromArray = (items) => items[Math.floor(Math.random()*items.length)]
  return <div className="VideoBanner">
    <img className="video" src={`/static/components/video-banner/tpy-hero.png`} />
    <div className="overlay">
      <Title color="#fff">
        Join the best of our industry
      </Title>
      <div>
        <div className="subtitle">
          Collaborate with our community to bring your tech ideas to life.
        </div>
        <div className="button-wrapper">
          <Button
            href="https://www.bartroorda.nl"
            target="_blank"
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
        justify-content: center;
        flex-direction: column;
        background: rgba(0,0,0,0.2);
        text-align: center;
        font-size: 3rem;
      }
      @media (min-width: 480px) {
        .overlay {
          justify-content: center;
          padding-top: 102px 10% 0 10%;
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

export default VideoBanner;
