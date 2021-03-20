import React, { Component } from 'react';

class IntroText extends Component {
  render() {
    return <div className="IntroText">
      {this.props.children}
      <style jsx>{`
        .IntroText {
          margin: 3rem auto 4rem auto;
          width: 32rem;
          max-width: 100%;
          color: #0F2247;
          text-align: left;
          padding: 0 24px;

          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
        @media(min-width: 480px) {
          .IntroText {
            width: 649px;
            margin-top: 123px;
            margin-bottom: 148px;
            font-size: 22px;
            line-height: 32px;
          }
        }
      `}</style>
    </div>
  }
}

export default IntroText;
