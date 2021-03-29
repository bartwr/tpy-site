import React, { Component } from 'react';
import Link from 'next/link';
import * as R from 'ramda';
import sal from 'sal.js'
import $ from 'jquery';

class Slide extends Component {
  componentDidMount() {
    sal();
  }
  slideTo(anchor) {
    if(! anchor) return;

    $('html, body').animate({
      'scrollTop': $(anchor).offset().top - (window.innerWidth > 480 ? 50 : 0)
    }, 500);
  }
  render() {
    let top = 0;
    if(this.props.data.title == 'co-creation') {
      top = '5px';
    } else if(this.props.data.title == 'acceleration') {
      top = '12px';
    }
    console.log(top)
    return <div className="Slide">
      <a
        href={this.props.data.href}
        onClick={(e) => {
          e.preventDefault();

          this.slideTo(this.props.data.href)
        }}
      >
        <div>
          <div className="image-wrapper">
            <img
              width={this.props.data.imageHeight}
              height={this.props.data.imageHeight}
              src={this.props.data.image}
              data-sal-duration="400"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              style={{
                position: 'relative',
                top: top
              }}
            />
          </div>
          <div className="Slide-title">
            {this.props.data.title}
          </div>
        </div>
      </a>
      <style jsx>{`
        .Slide {
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
        .Slide .image-wrapper {
          height: 118px;
          vertical-align: baseline;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .Slide img {
          display: block;
          margin: 0 auto;
          vertical-align: middle;
        }
        .Slide:focus img {
          animation: rotation 2s linear infinite;
        }
        .Slide-title {
          text-transform: uppercase;
          margin: 2rem auto;
          transition: transform 0.3s;
          text-align: center;
          color: #144372;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 1px;
          text-align: center;
          padding: 0 24px;
        }
        @media(min-width: 940px) {
          .Slide {
            flex: 1;
          }
          .Slide-title {
            font-size: 18px;
            line-height: 24px;
          }
          .Slide img {
            transition: transform 0.3s;
          }
          .Slide:hover img {
            transform: scale(1.05);
            transition: transform 0.2s;
          }
        }

        .rotate {
           animation: rotation 2s;
        }

        .linear {
          animation-timing-function: linear;
        }

        .infinite {
          animation-iteration-count: infinite;
        }
        
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }

      `}</style>
    </div>
  }
}

export default Slide;
