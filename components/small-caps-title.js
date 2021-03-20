import React, { Component } from 'react';

class SmallCapsTitle extends Component {
  render() {
    const lengthOfSmallCapsTitle = this.props.children.length;
    return (
      <div className={'SmallCapsTitle ' + this.props.size} style={
        Object.assign({}, this.props.style, {
          color: this.props.color
        })
      }>
        {this.props.children}
        <style jsx>{`
          .SmallCapsTitle {
            font-family: "Maison Neue", sans-serif;
            text-transform: uppercase;
            font-size: 11px;
            line-height: 16px;
            color: #FF8850;
          }
          @media(min-width: 480px) {
            .SmallCapsTitle {
              font-size: 18px;
              line-height: 24px;
            }
          }
          .SmallCapsTitle.small {
            line-height: 12px;
            font-family: "Maison Neue Bold", sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;
          }
        `}</style>
      </div>
    )
  }
}

export default SmallCapsTitle;
