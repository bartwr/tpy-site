import React, { Component } from 'react';
import sal from 'sal.js'

class IntroText extends Component {
  componentDidMount() {
    sal();
  }
  render() {
    return <div
      className="IntroText"
      data-sal={this.props['data-sal']}
      data-sal-duration={this.props['data-sal-duration']}
      data-sal-delay={this.props['data-sal-delay']}
      data-sal-easing={this.props['data-sal-easing']}
      style={this.props.style}
    >
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
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
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
