import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

class MeetingSpaceBlock extends Component {
  constructor(props) {
    super(props);
  }

  getData(variant) {
    const variants = {
      '1': {
        title: 'Meeting space 1',
        subTitle: '14 persons - 27',
        price1: 50,
        price1Desc: 'per hour excl. 21% vat',
        price2: 175,
        price2Desc: 'half a day excl. 21% vat<br />9:00 - 13:00  |  13:00 - 17:00',
        price3: 325,
        price3Desc: 'full day excl. 21% vat<br />9:00 - 17:00',
        tagline: 'Members get 10% discount.<br />Office owners get 35% discount.'
      },
      '2': {
        title: 'Meeting space 2',
        subTitle: '8 persons - 20',
        price1: 40,
        price1Desc: 'per hour excl. 21% vat',
        price2: 125,
        price2Desc: 'half a day excl. 21% vat<br />9:00 - 13:00  |  13:00 - 17:00',
        price3: 250,
        price3Desc: 'full day excl. 21% vat<br />9:00 - 17:00',
        tagline: 'Members get 10% discount.<br />Office owners get 35% discount.'
      },
      '3': {
        title: 'Meeting space 3',
        subTitle: '4 persons - 13',
        price1: 25,
        price1Desc: 'per hour excl. 21% vat',
        price2: 90,
        price2Desc: 'half a day excl. 21% vat<br />9:00 - 13:00  |  13:00 - 17:00',
        price3: 175,
        price3Desc: 'full day excl. 21% vat<br />9:00 - 17:00',
        tagline: 'Members get 10% discount.<br />Office owners get 35% discount.'
      }
    }

    return variants[variant];
  }

  render() {
    const data = this.getData(this.props.variant);

    return <div className={`MeetingSpaceBlock ${this.props.variant}`}>
      <div className="boxed">
        <div className="heading">
          <Link href="/join-community">
            <b>{data.title}</b>
          </Link>
          <span className="extra-benefit">
            {data.subTitle} m<sup>2</sup>
          </span>
        </div>
        <div className="py-4" style={{
          borderTop: '1px solid rgba(151, 151, 151, 0.5)'
        }}>
          <div className="text-center price">
            <sup>&euro;</sup> <span className="inline-block">{data.price1}</span>
          </div>
          <p className="text-sm text-center mt-0" style={{marginBottom: '18px', fontSize: '16px', lineHeight: '24px'}} dangerouslySetInnerHTML={{
            __html: data.price1Desc
          }} />
        </div>
        <div className="py-4" style={{
          borderTop: '1px solid rgba(151, 151, 151, 0.5)'
        }}>
          <div className="text-center price">
            <sup>&euro;</sup> <span className="inline-block">{data.price2}</span>
          </div>
          <p className="text-sm text-center mt-0" style={{marginBottom: '18px', fontSize: '16px', lineHeight: '24px'}} dangerouslySetInnerHTML={{
            __html: data.price2Desc
          }} />
        </div>
        <div className="py-4" style={{
          borderTop: '1px solid rgba(151, 151, 151, 0.5)',
          borderBottom: '1px solid rgba(151, 151, 151, 0.5)'
        }}>
          <div className="text-center price">
            <sup>&euro;</sup> <span className="inline-block">{data.price3}</span>
          </div>
          <p className="text-sm text-center mt-0" style={{marginBottom: '18px', fontSize: '16px', lineHeight: '24px'}} dangerouslySetInnerHTML={{
            __html: data.price3Desc
          }} />
        </div>
        <div className="tagline px-2" dangerouslySetInnerHTML={{
          __html: data.tagline
        }} />
        <div className="text-center">
          <Button href="/contact" style={{
            margin: '8px auto 8px auto',
          }}>
            book me
          </Button>
        </div>
      </div>
      <style jsx>{`
       @media(min-width: 480px) {
         .MeetingSpaceBlock {
            width: 306px;
         }
         
         .MeetingSpaceBlock .title {
            font-size: 24px;
            padding-bottom: 42px;
         }
       }
       
       .MeetingSpaceBlock .title {
          font-size: 22px;
       }
      
        .MeetingSpaceBlock {
          text-align: left;
          color: #144372;
          margin: 32px 12px;
          display: inline-block;
          vertical-align: top;
        }
        .MeetingSpaceBlock .boxed {
          position: relative;
          padding: 24px 16px 40px 16px;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
        }
        .MeetingSpaceBlock.flex-coworking .boxed {
          background: #F1EFEC;
        }
        .MeetingSpaceBlock .triangle {
          display: none;
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: 0;
          height: 0;
          border-top: solid 103px #FF8850;
          border-bottom: solid 103px transparent;
          border-left: solid 103px transparent;
          z-index: 1;
        }
        .MeetingSpaceBlock .triangle span {
          display: inline-block;
          color: #ffffff;
          font-family: "Montserrat",sans-serif;
          font-size: 17px;
          font-weight: 300;
          text-transform: uppercase;
          top: -74px;
          right: -5px;
          position: absolute;
          transform: rotate(45deg);
        }
        .MeetingSpaceBlock.flex-coworking .triangle {
          display: block;
        }
        .MeetingSpaceBlock .price {
          height: 72px;
          font-weight: 600;
          font-family: Montserrat, sans-serif;
          margin: 20px auto 0 auto;
          font-size: 56px;
          line-height: 72px;
        }
        .MeetingSpaceBlock .price sup {
          font-size: 22px;
          line-height: 32px;
          margin-right: -10px;
          font-weight: 500;
          top: -4px;
          position: relative;
        }
        .heading b {
          letter-spacing: 1px;
          font-size: 18px;
          line-height: 48px;
          cursor: copy;
          display: block;
          min-height: 48px;
          background-color: ;
          background: #071124 url('/static/components/pricing/header-bg.png') center center / cover no-repeat;
          color: #ffffff;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
        }
        .extra-benefit {
          color: #0F2247;
          display: block;
          margin: 8px 0;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          font-size: 22px;
          line-height: 32px;
          padding: 30px 0;
        }
        .pricing-wrapper {
          margin: 24px 0 24px 0;
          text-align: center;
        }
        .price-in-euros {
          display: inline-block;
          margin: 0 auto;
          color: #144372;
          font-family: "Montserrat", sans-serif;
          font-size: 56px;
          line-height: 72px;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
        }
        .price-in-euros sup {
          position: absolute;
          left: -17px;
          font-size: 22px;
          font-weight: 500;
          top: -16px;
        }
        .pricing-wrapper small {
          display: block;
          color: #144372;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 300;
        }
        hr {
          border: none;
          height: 1px;
          background: #ccc;
        }
        h1 {
          color: #144372;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          line-height: 32px;
          font-size: 22px;
          line-height: 32px;
          text-align: center;
          min-height: 96px;
          justify-content: center;
          flex-direction: column;
          display: flex;
        }
        .features {
          color: #144372;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
          border-bottom: solid #ccc 1px;
          max-height: 50px;
          overflow: hidden;
          transition: max-height 1.2s;
          cursor: pointer;
        }
        .features.is-active {
          max-height: 1200px;
          cursor: text;
        }
        .feature {
          border-top: solid #ccc 1px;
          padding: 12px;
          position: relative;
        }
        .button {
          display: block;
          text-decoration: none;
          text-align: center;
          margin: 40px 0 8px 0;
          height: 48px;
          line-height: 48px;
          background-color: #feef00;

          color: #144372;
          font-family: "Open Sans", sans-serif;
          font-size: 18px;
        }
        .coworking .button {
          background: #fff;
          color: #144372;
        }

        .arrow {
          width: 100%;
          transition: transform 0.4s 0.2s;
          transform: rotate(180deg);
          background: top left no-repeat url('/static/components/pricing/arrow-top.svg');
          width: 16px;
          height: 9px;
          position: absolute;
          top: 20px;
          right: 12px;
          cursor: pointer;
        }
        
        .main-arrow {
          width: 100%;
          transition: transform 0.4s 0.2s;
          transform: rotate(180deg);
          background: top left no-repeat url('/static/components/pricing/arrow-top.svg');
          width: 16px;
          height: 9px;
          position: absolute;
          right: 12px;
          cursor: pointer;
        }
        
        .arrow.down, .main-arrow.down {
          transition: transform 0.4s;
          transform: rotate(0);
        }
        .tagline {
          margin: 20px 0 27px 0;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 24px;
          color: #14B586;
        }
      `}</style>
    </div>
  }
}

export default MeetingSpaceBlock;
