import React, { Component } from 'react';
import sal from 'sal.js'

class Title extends Component {
  componentDidMount() {
    sal();
  }
  render() {
    // Get length of title
    const lengthOfTitle = this.props.children.length;

    // Set text size
    let size;
    if(this.props.size) {
      size = this.props.size;
    } else {
      size = (lengthOfTitle < 38 ? 'large' : 'small')
    }
    return <div
        className={
          // If size prop is large -> show large title
          // If size prop is small -> show small title
          // By default: show small title is text length < 40 characters
          'Title ' + size
        }
        style={Object.assign({
          color: this.props.color,
          textAlign: this.props.align
        }, this.props.style)}
        >
      {this.props.children}
      <style jsx>{`
        .Title {
          color: #144372;
          margin: 0 0;
          overflow: ellipsis;
          overflow-x: hidden;
          overflow-y: hidden;
          word-break: break-word;

          font-size: 36px;
          line-height: 40px;

          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: 600;

          letter-spacing: -0.005em;
        }
        .Title > :global(a),
        .Title > :global(a:visited) {
          color: #0F2247;
          border-bottom: none;
          text-decoration: none;
        }
        .large {
          font-size: 27px;
          line-height: 32px;
        }
        .small {
          font-size: 27px;
          line-height: 32px;
        }
        .xsmall {
          font-size: 13px;
          line-height: 2.5rem;
        }
        @media(min-width: 480px) {
          .Title {
            font-size: 56px;
            line-height: 72px;
            font-weight: 700;
          }
          .large {
            font-size: 48px;
            line-height: 56px;
          }
          .small {
            font-size: 48px;
            line-height: 56px;
          }
          .xsmall {
            font-size: 17px;
            line-height: 20px;
          }
        }
      `}</style>
    </div>
  }
}

export default Title;
