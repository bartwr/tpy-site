import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import $ from 'jquery';
import sal from 'sal.js'

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

class FooterBanner extends Component {
  componentDidMount() {
    sal();
  }

  initTransition() {
    const self = this;

    // On scroll: Change background color
    $(window).scroll(function(event){
      const percentageSeen = self.percentageSeen();
      const backgroundColorOpacity = Math.min(100, Math.floor((100 - percentageSeen) / 100 * 255))
      const textAndImageOpacity = 100 - backgroundColorOpacity;
      $('.FooterBanner').css('background-color', `rgba(255, 240, 0, ${backgroundColorOpacity / 100})`)
      $('.TextAndImage, .StoryOverview').css('opacity', `${(textAndImageOpacity + 0) / 100}`)
    })
  }

  percentageSeen () {
    let $win = $(window),
        $element = $('.FooterBanner'),
        viewportHeight = $win.height(),
        scrollTop = $win.scrollTop(),
        elementOffsetTop = $element.offset().top,
        elementHeight = $element.height();

    // https://stackoverflow.com/a/37382645
    var percentageSeen = Math.min( 100, Math.round((elementOffsetTop - scrollTop) * 100 / viewportHeight) )

    // console.log(percentageSeen)
    return percentageSeen >= 0 ? Math.abs(percentageSeen * 1.8) : Math.abs(percentageSeen * 2.2)
  }

  componentWillUnmount() {
    // $('body').css('background-color', `transparent`)
    // $('.TextAndImage, .StoryOverview').css('opacity', 1)
    // $(window).off('scroll');
  }

  render() {
    return <div className="FooterBanner">
      <div className="max-width text-center" style={{
        width: '711px'
      }}>
        <Title 
          size="large"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
          style={{
            textAlign: 'center'
          }}>
          {this.props.title}
        </Title>
        <div
          data-sal-duration="300"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
        >
          <Button
            href={this.props.buttonLink || '/contact'}
            target={this.props.target}
            style={{
              display: 'inline-block',
              marginRight: 'auto',
              marginTop: '40px',
              marginLeft: 'auto',
              minwidth: '148px',
              whiteSpace: 'nowrap'
            }}
          >
            {this.props.buttonText}
          </Button>
        </div>
      </div>
      <style jsx>{`
        .FooterBanner {
          position: relative;
          background: url('/static/components/footer-banner/tpy-banner-background-mobile.png') center top no-repeat;
          background-size: cover;
          min-height: 624px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          padding-top: 74px;
        }
        @media(min-width: 480px) {
          .FooterBanner {
            padding-top: 82px;
            background-image: url('/static/components/footer-banner/tpy-banner-background.png');
          }
        }
        .max-width {
          margin: 0 auto;
          width: 36rem;
          max-width: 100%;
          padding: 0 1rem;
        }
      `}</style>
    </div>
  }
}

export default FooterBanner;
