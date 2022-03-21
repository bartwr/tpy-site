import React, { Component } from 'react';
import Link from 'next/link';

class Button extends Component {
  renderLink(props) {
    return (
      <div>
        <Link href={props.buttonLink || props.href}>
          <a target={props.target || '_self'} className={`Button ${props.classes}`} style={props.style}>
            {props.children}
          </a>
        </Link>
        <style jsx>{`
          .Button {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 16px 32px;

            position: static;
            min-width: 148px;
            min-height: 56px;
            left: 0px;
            top: 0px;

            /* call to action */

            background: #FF8850;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 28px;

            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;

            text-align: center;
            color: #fff;
            text-decoration: none;

            display: inline-block;
            cursor: pointer;
            text-transform: lowercase;

            transition: all 0.2s;
          }
          .Button:hover {
            box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.19);
            transition: all 0.2s;
            opacity: 0.95;
          }
        `}</style>
      </div>
    )
  }
  renderButton(props) {
    return (
      <div>
        <button type={props.type} className="Button" style={props.style}>
          {props.children}
        </button>
        <style jsx>{`
          .Button {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 16px 32px;

            position: static;
            min-width: 148px;
            min-height: 56px;
            left: 0px;
            top: 0px;

            /* call to action */

            background: #FF8850;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 28px;

            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;

            text-align: center;
            color: #fff;
            text-decoration: none;

            display: inline-block;
            cursor: pointer;
            text-transform: lowercase;

            transition: all 0.2s;
            box-shadow: 0;
            border: 0;
          }
          .Button:hover {
            box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.19);
            transition: all 0.2s;
            opacity: 0.8;
          }
        `}</style>
      </div>
    )
  }
  render() {
    return <div hidden={this.props.hidden}>
      {this.props.type
        ? this.renderButton(this.props)
        : this.renderLink(this.props)
      }
    </div>
  }
}

export default Button;
