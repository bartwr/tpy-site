import React, { Component } from 'react';
import Link from 'next/link';
import * as R from 'ramda';

class Slide extends Component {
  render() {
    return <div className="Slide">
      <a href={this.props.data.href}>
        <div>
          <div className="image-wrapper">
            <img
              width={this.props.data.imageHeight}
              height={this.props.data.imageHeight}
              src={this.props.data.image}
              style={{
                position: 'relative',
                top: (this.props.data.title == 'co-creation' ? '5px' : 0)
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
        .Slide-title {
          margin: 2rem auto;
          transition: transform 0.3s;
          text-align: center;
          color: #144372;
          font-family: "Maison Neue", sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 24px;
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
      `}</style>
    </div>
  }
}

export default Slide;
