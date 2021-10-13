import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';

// Load components
const IntroText = dynamic(() => import('../components/intro-text.js'));
const Title = dynamic(() => import('../components/title.js'));
const Button = dynamic(() => import('../components/button.js'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const MeetingSpaceBlock = dynamic(() => import('../components/meeting-space-block.js'));

class PricingBlock extends Component {
  constructor(props) {
    super(props);

    this.handleIsActive = (name = '', isActive = false) => {};

    if (typeof props.handleIsActive !== 'undefined') {
      this.handleIsActive = props.handleIsActive;
    }

    this.state = {
      isActive: false
    };
  }

  render() {
    const mapIndexed = R.addIndex(R.map);
    const data = this.props.data;
    let includeText = '';

    if (!this.state.isActive) {
      includeText = "Find out what's included"
    }

    return <div className={`PricingBlock ${data.name}`}>
      <div className="boxed">
        <div className="triangle">
          <span>Popular</span>
        </div>
        <div className="heading">
          <Link href="/join-community">
            <b>{data.heading}</b>
          </Link>
          <span className="extra-benefit">
            {data.extraBenefit}
          </span>
        </div>
        <div className="pricing-wrapper">
          <div className="price-in-euros">
            {data.price !== 'VAR' ? (<sup>&euro;</sup>) : <sup></sup>}  {data.price}
          </div>
          <small>{data.priceDescription}</small>
        </div>
        <hr />
        <h1 className="title">
          {data.title}
        </h1>
        <div className={'features' + (this.state.isActive ? ' is-active' : '')}>
          <div className="feature" style={(this.state.isActive) ? {display:'none'} : {}}
               onClick={() => {
                 this.setState({ isActive: ! this.state.isActive });
                 this.handleIsActive(data.name, this.state.isActive);
               }}
          >
            {includeText}
            <div className={'arrow' + (this.state.isActive ? ' down' : '')} />
          </div>
          {mapIndexed((feature, idx) => {
            return <div key={idx} className="feature"
                        onClick={() => {
                          if (idx === 0) {
                            this.setState({ isActive: ! this.state.isActive });
                            this.handleIsActive(data.name, this.state.isActive);
                          }
                        }}
            >
              {feature}
              <div style={(!this.state.isActive || idx !== 0) ? {display:'none'} : {}} className={'arrow' + (this.state.isActive ? ' down' : '')} />
            </div>
          }, data.features)}
        </div>
        <div className="tagline">
          {data.tagline}
        </div>
        <div className="text-center">
          <Button href="/join-community" style={{
            margin: '8px auto 8px auto',
          }}>
            sign up
          </Button>
        </div>
      </div>
      <style jsx>{`
       @media(min-width: 480px) {
         .PricingBlock {
            width: 306px;
         }
         
         .PricingBlock .title {
            font-size: 24px;
            padding-bottom: 42px;
         }
       }
       
       .PricingBlock .title {
          font-size: 22px;
       }
      
        .PricingBlock {
          text-align: left;
          margin: 32px 12px;
          display: inline-block;
          vertical-align: top;
        }
        .PricingBlock .boxed {
          position: relative;
          padding: 24px 16px 40px 16px;
          box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
          background-color: #ffffff;
        }
        .PricingBlock.flex-coworking .boxed {
          background: #F1EFEC;
        }
        .PricingBlock .triangle {
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
        .PricingBlock .triangle span {
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
        .PricingBlock.flex-coworking .triangle {
          display: block;
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
          height: 24px;
          display: block;
          margin: 8px 0;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          font-size: 13px;
          line-height: 24px;
          text-transform: uppercase;
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
          font-size: 22px;
          line-height: 32px;
          margin-right: -10px;
          font-weight: 500;
          top: -4px;
          position: relative;
        }
        .pricing-wrapper small {
          display: block;
          min-height: 40px;
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
          padding: 12px 30px 12px 12px;
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
          min-height: 72px;
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

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.size = 0;

    this.handleIsActive = (blockName = '', isActive = false) => {

        if (!isActive) {
          this.size++;
        } else {
          this.size--;
        }

        this.setState({isActive: this.size > 0});
    };
  }

  render() {
    const membershipsPart1 = [
      {
        name: 'membership-only',
        heading: 'Membership only',
        extraBenefit: '',
        price: '57.25',
        priceDescription: 'per month excl. 21% vat',
        title: 'Become part of the TPY community',
        features: [
          'Workplace at the membership area',
          'Access to lounge area and kitchenette',
          'Superfast wifi',
          'Unlimited coffee / tea',
          'Access to the TPY community',
          'Private events, programs, and meetups',
          'Access Monday to Friday',
          'Free parking',
          'Contract period 1 month'
        ],
        tagline: '* If you’re a student you receive a 50% discount on your membership. This means you can become a member of the TPY community for 28.50 p/m excl. 21% VAT!'
        // tagline: 'A great way to access the power of our community.'
      },
      {
        name: 'flex-coworking',
        heading: 'Flex Coworking',
        extraBenefit: '+ membership',
        price: '207.50',
        priceDescription: 'per month excl. 21% vat',
        title: 'Flexible workplace starting from 1 day a week',
        features: [
          'Flex-workplace at the co-working area',
          'Ergonomic chair, height adjustable desk, monitor',
          'Access to lounge area and kitchenette',
          'Superfast wifi',
          'Unlimited coffee / tea',
          'Access to the TPY community',
          'Private events, programs, and meetups',
          'Access 24/7',
          'Free parking',
          'Contract period 1 month',
          'Locker (add. € 15 p/m)',
          'Postal address (add. € 25 p/m)'
        ],
        tagline: 'An incredible way to work in our co-working space and with our community.'
      },
      {
        name: 'flex-dedicated',
        heading: 'Dedicated Coworking',
        extraBenefit: '+ membership',
        price: '228.75',
        priceDescription: 'per month excl. 21% VAT',
        title: 'Fixed workplace in our coworking space',
        features: [
          'Dedicated workplace at the co-working area',
          'Personal locker',
          'Business registration + personal mailbox',
          'Ergonomic chair, height adjustable desk, monitor',
          'Access to lounge area and kitchenette',
          'Superfast wifi',
          'Unlimited coffee / tea',
          'Access to the TPY community',
          'Private events, programs, and meetups',
          'Access 24/7',
          'Free parking',
          'Contract period 1 month',
        ],
        tagline: 'The perfect way to set up your shop right in the heart of our community.'
      },
      {
        name: 'office',
        heading: 'Office',
        extraBenefit: '+ membership',
        price: '732.75',
        priceDescription: 'per month excl. 21% VAT for a 3-person office',
        title: 'Use of workplace in enclosed space',
        features: [
          'Enclosed, locked office',
          'Dedicated workplace with desk',
          'Personal locker',
          'Business registration + personal mailbox',
          'Access to lounge area and kitchenette',
          'Superfast wifi',
          'Unlimited coffee / tea',
          'Access to the TPY community',
          'Private events, programs, and meetups',
          'Access 24/7',
          'Free parking',
          'Contract period 1 month',
        ],
        tagline: 'The best way to make our space yours and join our community.'
      },
      {
        name: 'travel-pass',
        heading: 'Travel Pass',
        extraBenefit: '',
        price: '25.00',
        priceDescription: 'per day excl. 21% VAT',
        title: 'Access to the TPY Community for 1 day',
        features: [
          'Flex-workplace at the co-working area',
          'Ergonomic chair, height adjustable desk, monitor',
          'Access to lounge area and kitchenette',
          'Superfast wifi',
          'Unlimited coffee / tea',
          'Access to the TPY community ',
          'Access from 08:00-18:00',
          'Travelpass 1 week (5 days) = 100,- '
        ],
        tagline: ''
      },
      {
        name: 'virtual-office',
        heading: 'Virtual Office',
        extraBenefit: '',
        price: '83.25',
        priceDescription: 'per month excl. 21% VAT',
        title: 'Membership with business address',
        features: [
          'Recognized business address (register Chamber of Commerce)',
          'Mailbox at Laan van Ypenburg 108, The Hague',
          'Possibility to use the workplaces in the membership area at the TPY Community Center',
          'Optional: mail forwarded twice a month'
        ],
        tagline: ''
      }
    ];

    return <div className="Pricing">
      <IntroText>
        TPY offers the space you need right now, and in the future. Our dynamic campus can fulfill all your needs.
      </IntroText>
      <div className="pricing-blocks-wrapper">
        {R.map((membershipPart1) => <PricingBlock handleIsActive={this.handleIsActive} key={membershipPart1.name} data={membershipPart1} />, membershipsPart1)}
      </div>
      <Title style={{
        padding: '45px 0px',
        textAlign: 'center'
      }}>
        Rent a meeting space
      </Title>
      <div className="pricing-blocks-wrapper meeting-spaces">
        <MeetingSpaceBlock
          key={'meetingSpace1'}
          variant="1"
        />
        <MeetingSpaceBlock
          key={'meetingSpace2'}
          variant="2"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="3"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="4"
        />
        <MeetingSpaceBlock
          key={'meetingSpace3'}
          variant="5"
        />
      </div>
      <div>
        <FooterBanner
          title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
          buttonText="book a tour"
          buttonLink="https://outlook.office365.com/owa/calendar/TheHagueTech@jongensvantechniek.nl/bookings/"
          target="_blank"
          />
      </div>
      <style jsx>{`
      .pricing-blocks-wrapper {
        text-align: center;
      }
      .pricing-blocks-wrapper.meeting-spaces {
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 1160px;
      }

      .newOfferings {
        font-size: 35px;
      }
      
      #firstPricingBlock {
        height: ${this.state.isActive ? '1200px' : '690px'}
      }
      
      @media(max-width: 1340px) {
        .pricing-blocks-wrapper {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto;
        }
      }
    `}</style>
    </div>
  }
}

export default Pricing;
