import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import $ from 'jquery'

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));

class TextAndImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      onMobile: true
    }
  }
  componentDidMount() {
    if(typeof window !== "undefined" && window.innerWidth >= 480) {
      this.setState({
        onMobile: false
      })
    }
  }

  render() {
    return <div
      className="TextAndImage"
      id={this.props.anchorName}
      data-title={this.props.title}
    >
      <div 
        className="image-wrapper"
        style={{
          backgroundImage: `url(${this.props.image})`,
          order: this.props.imagePosition  == 'right' ? 1 : 0
        }}
        data-sal={(this.state.onMobile) ? `fade` : `slide-${this.props.imagePosition == 'right' ? 'left' : 'right'}`}
        data-sal-duration="300"
        data-sal-delay="300"
        data-sal-easing={`ease-in-out`}
      >
        <img src={this.props.image} className="image" />
      </div>
      <div
        className="text-wrapper"
        data-sal={(this.state.onMobile) ? `fade` : `slide-${this.props.imagePosition == 'right' ? 'right' : 'left'}`}
        data-sal-duration="300"
        data-sal-delay="300"
        data-sal-easing={`ease-in-out`}
      >

        <div style={{
          marginBottom: '6px'
        }}>
          <SmallCapsTitle>
            {this.props.category}
          </SmallCapsTitle>
        </div>

        <Title size="medium">
          {this.props.title}
        </Title>

        <div className="text" dangerouslySetInnerHTML={{__html: this.props.text}} />

        {this.props.buttonLink && <Button
          href={this.props.buttonLink}
          hidden={! this.props.buttonText}
          >
          {this.props.buttonText || 'learn more'}
        </Button>}

      </div>
      <style jsx>{`
        .TextAndImage {
          color: #0F2247;
          font-family: "Montserrat", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: left;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 1327px;
          max-width: 100%;
          margin: 0 auto;
        }
        .text-wrapper {
          width: 100%;
        }
        @media (max-width: 960px) {
          .image-wrapper {
            order: 0 !important;
          }
        }
        .image {
          display: block;
        }
        .text-wrapper {
          padding: 2rem 16px 6rem;
        }
        .text {
          margin: 8px 0 24px 0;
          font-size: 16px;
          line-height: 24px;
        }
        /* On desktop: show full size image */
        @media (min-width: 960px) {
          .TextAndImage {
            min-height: 480px;
            flex-wrap: nowrap;
            padding: 0 24px;
            margin: 128px auto;
          }
          .image-wrapper,
          .text-wrapper {
            flex: 1;
            width: 50%;
          }
          .image-wrapper {
            background-image: none;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .image {
            display: none;
          }
          .text-wrapper {
            padding: 0 114px;
          }
          .text {
            margin: 16px 0 56px 0;
            font-size: 19px;
            line-height: 32px;
          }
        }
      `}</style>
    </div>
  }
}

export default TextAndImage;
