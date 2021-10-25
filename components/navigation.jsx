import React, { Component } from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import * as R from 'ramda';
import $ from 'jquery';

// Load components
const Logo = dynamic(() => import('../components/logo.js'));
const NextEvent = dynamic(() => import('../components/next-event.js'));

class Navigation extends Component {
  constructor(props) {
    super(props)

    const isClient = typeof document !== 'undefined'

    this.state = {
      showNav: false,
      path: isClient && Router.pathname
    }

    this.TO_interval;

    Router.events.on('routeChangeComplete', (url) => {
      $('body').css('overflow-y', 'unset')
    });
  }
  componentDidMount() {
    this.autoHideNav();

    this.setState({
      activePrimaryNav: window.innerWidth < 780 ? 'How' : null
    })
  }
  componentUnMount() {
    clearTimeout(this.TO_interval);
  }
  autoHideNav() {
    /**
     * Header scroll
     * 
     * https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
     */
    var self = this;
    $(function() {

      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.Navigation').outerHeight();

      // on scroll, let the interval function know the user has scrolled
      $(window).scroll(function(event){
        didScroll = true;
        self.setState({ activePrimaryNav: null, showNav: false })
      });

      // run hasScrolled() and reset didScroll status
      self.TO_interval = setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      function hasScrolled() {
        var st = $(window).scrollTop();

        // Don't hide if menu is active
        if($('.Navigation').hasClass('is-active')) {
          return false;
        }

        // If current position > last position AND scrolled past navbar...
        if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.Navigation').removeClass('nav-down').addClass('nav-up');
        } else {
          // Scroll Up
          $('.Navigation').removeClass('nav-up').addClass('nav-down');
        }
        lastScrollTop = st;
      }
    })
  }
  clickToggleButton() {
    if(window.innerWidth < 780) {
      $('body').css('overflow-y', this.state.showNav ? 'unset' : 'hidden')
    }
    this.setState({
      // On open: Set active nav item on 'How'
      activePrimaryNav: this.state.showNav ? null : 'How',
      // Toggle nav
      showNav: ! this.state.showNav
    })
  }
  clickPrimaryNavLink(name) {
    // Give is-active class, but only if it didn't have it
    if(this.state.activePrimaryNav == name) {
      this.setState({ activePrimaryNav: null, showNav: false })
    } else {
      this.setState({ activePrimaryNav: name, showNav: true })
    }
  }
  hoverPrimaryNavLink(name) {
    // On mobile: Do nothing
    if(window.innerWidth < 780) return;
    this.setState({ activePrimaryNav: name, showNav: true })
  }
  render() {
    let navigation = [
      {
        title: 'Home',
        href: '/'
      },
      {
        title: 'What we offer',
        items: [{
          title: 'Community',
          href: '/community',
          image: '/static/components/carousel/tpy-icon-community.svg'
        }, {
          title: 'Campus',
          href: '/campus',
          image: '/static/components/carousel/tpy-icon-campus.svg'
        }, {
          title: 'Academy',
          href: '/academy',
          image: '/static/components/carousel/tpy-icon-academy.svg'
        }, {
          title: 'Acceleration & Incubation',
          href: '/acceleration',
          image: '/static/components/carousel/tpy-icon-acceleration.svg',
        }, {
          title: 'Softlanding',
          href: '/softlanding',
          image: '/static/components/carousel/tpy-icon-softlanding.svg',
        }, {
          title: 'Co-creation',
          href: '/co-creation',
          image: '/static/components/carousel/tpy-icon-co-creation.svg'
        }, {
          title: 'Win a Voucher!',
          href: '/win',
          image: '/static/components/carousel/tpy-icon-academy.svg'
        }],
      },
      {
        title: 'What is happening?',
        href: '/happening'
      },
      {
        title: 'Pricing',
        href: '/pricing'
      },
      {
        title: 'About',
        items: [{
          title: 'Contact details',
          href: '/contact',
          image: '/static/components/carousel/tpy-icon-community.svg'
        }, {
          title: 'About us',
          href: '/about',
          image: '/static/components/carousel/tpy-icon-campus.svg'
        }, {
          title: 'History of TPY',
          href: '/history-of-tpy',
          image: '/static/components/carousel/tpy-icon-academy.svg'
        }],
      }
    ]
    return <header className={'Navigation' + (this.state.showNav ? ' is-active' : '')}>
      <div className="max-width">
        <Link href="/">
          <div style={{
            cursor: 'pointer',
            display: 'inline-block'
        }} title="Back to home">
            <Logo style={{
              zIndex: 1
            }} />
          </div>
        </Link>
        <div className="white-background main only-on-desktop"></div>
        <div className="white-background sub only-on-desktop"></div>
        <div className="black-background only-on-desktop" onClick={() => this.setState({ showNav: false, activePrimaryNav: null })}></div>
        <nav className="main-nav">
          <ul>
            {R.map((item) => {
              return <li key={item.title} className={'primary-nav-item' + (this.state.activePrimaryNav == item.title ? ' is-active' : '')}>
                {item.href
                  ? <Link href={item.href}>
                      <a
                        onClick={() => this.setState({ showNav: false, activePrimaryNav: item.title })}
                        className={'primary-nav-link' + (this.state.path == item.href ? ' is-active' : '')}
                        >
                        {item.title}
                      </a>
                    </Link>
                  : <a
                      onClick={() => this.clickPrimaryNavLink(item.title)}
                      onMouseOver={() => this.hoverPrimaryNavLink(item.title)}
                      className="primary-nav-link">
                      {item.title}
                    </a>
                }
                <nav className={'secundary-nav' + (item.items ? ' has-subnav' : '')}>
                  <ul>
                    {item.items && R.map((item) => {
                      return <li className="secundary-nav-item" key={item.title}>
                        <Link href={item.href}>
                          <div className="icon" style={{backgroundImage: `url(${item.image})`, backgroundSize: `auto ${item.imageHeight}`}} />
                        </Link>
                        <div style={{flex: 1, alignSelf: 'center'}}>
                          <Link href={item.href}>
                            <a className={'secundary-nav-link' + (this.state.path == item.href ? ' is-active' : '')}>{item.title}</a>
                          </Link>
                        </div>
                      </li>
                    }, item.items)}
                  </ul>
                </nav>
              </li>
            }, navigation)}
          </ul>
        </nav>
        <div
          className="toggle-nav flex justify-center flex-col h-full"
          onClick={() => this.clickToggleButton()}
          >
          <span className={'icon-' + (this.state.showNav ? 'close' : 'hamburger')}></span>
        </div>
      </div>
      <style jsx>{`
        .Navigation {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 18px;
          z-index: 10;
          background: #fff;
        }
        .Navigation.is-active {
          bottom: 0;
        }
        @media(min-width: 480px) {
          .Navigation.is-active {
            bottom: none;
          }
        }
        .Navigation > .max-width {
        }
        @media(max-width: 1100px) {
          .Navigation {
            background: rgba(255,255,255,0.95);
          }
        }
        .Navigation,
        .Navigation .toggle-nav {
          transition: top 0.2s ease-in-out;
        }
        .Navigation.nav-up,
        .Navigation.nav-up .toggle-nav {
          transition: top 0.4s ease-in-out;
          top: -107px;
        }
        .Navigation.is-active,
        .Navigation.is-active .toggle-nav {
          transition: top 0s;
        }

        li.secundary-nav-item {
          display: flex;
          justify-content: flex-start;
          flex-direction: row !important;
        }
        .Navigation .secundary-nav-item .icon {
          background: no-repeat url('https://assets.materialup.com/uploads/30080ad4-97ee-47f7-a98a-c0d2e8d704b2/preview');
          background-size: auto 42px;
          height: 42px;
          width: 42px;
          min-width: 42px;
          margin-right: 5px;
          align-self: start;
          background-position: center center;
        }

        @media (min-width: 1100px) {
          .Navigation .secundary-nav-item .icon {
            align-self: center;
          }
          .Navigation {
            padding: 0;
          }
          .max-width {
            width: 1327px;
            max-width: 100%;
            margin: 0 auto;
            padding: 40px 24px;
            display: flex;
            justify-content: flex-start;
          }
        }

        /*
          Navigation
        */
        .main-nav {
          display: none;
          padding-top: 3rem;
          margin-top: 22px;
          margin-left: -32px;
          position: relative;
          z-index: 2;
        }
        .secundary-nav {
          position: static;
          z-index: 1;
        }
        .secundary-nav li {
          min-height: 42px;
        }
        .main-nav > ul {
          position: relative;
          justify-content: flex-start;
        }
        @media(min-width: 1100px) {
          .main-nav {
            display: flex;
            margin-top: 0;
            margin-left: 164px;
            padding-top: 0;
          }
        }
        header.is-active .main-nav {
          display: block;
        }
        ul, li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        ul {
          min-height: 16rem;
          width: 100%;
        }
        @media(min-width: 1100px) {
          ul {
            height: auto;
            min-height: auto;
          }
        }
        li {
          display: block;
        }
        ul ul {
          border-left: solid #0F2247 1px;
          padding-left: 1rem; 
          width: auto;
          height: auto;
        }
        .primary-nav-item {
          z-index: 1;
        } 
        nav a {
          text-decoration: none;
          line-height: 44px;
          color: #0F2247;
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          line-height: 22px;
          font-weight: 300;
          display: inline-block;
          position: relative;
          margin-left: 12px;
          padding: 10px 17px;
          margin-bottom: 24px;
          min-width: 84px;
          cursor: pointer;
        }
        .primary-nav-item {
          max-width: 140px;
        }
        .primary-nav-link {
          min-width: 96px;
          white-space: nowrap;
          max-width: 128px;
          max-height: 175px;
          white-space: normal;
        }
        .secundary-nav-link {
          margin-right: 0;
        }
        @media(min-width: 1100px) {
          nav a {
            padding: 10px 8px
          }
          .secundary-nav-link {
            margin-right: 0;
            min-height: 10px;
            height: 30px;
            
          }
          .primary-nav-item {
            max-width: 9999px;
          }
          nav a.primary-nav-link {
            padding: 10px 0;
            min-width: unset;
            white-space: nowrap;
            border-bottom: solid transparent 9px;
            max-width: 9999px;
            max-height: 9999px;
          }
          .secundary-nav-link  {
            margin-right: 10px;
          }
        }
        nav nav a {
          padding: 10px 17px;
          margin-left: 10px;
          margin-right: 10px;
          display: block;
        }
        @media(min-width: 1100px) {
          nav a {
            margin-bottom: 0;
            text-align: center;
          }
          nav nav a {
            padding: 4px 8px;
          }
        }

        .primary-nav-item {
          left: -1rem;
        }
        @media(min-width: 1100px) {
          .primary-nav-item {
            left: 0;
          }
        }

        @media(min-width: 1100px) {
          .primary-nav-item {
            position: static;
            left: 0;
            width: auto;
  
            display: flex;
            justify-content: center;
            flex-direction: column;
            top: 10px;
            margin: 0 1rem;
          }
          .secundary-nav > ul {
            min-width: 204px;
          }
        }
        @media(min-width: 1400px) {
          .secundary-nav > ul {
            min-width: 302px;
          }
        }

        nav a:hover,
        nav a:focus,
        nav a:active,
        .primary-nav-item.is-active > a,
        .secundary-nav-link.is-active {
          background: #FF8850;
        }
        @media(min-width: 1100px) {
          nav .primary-nav-link:hover,
          nav .primary-nav-link:focus,
          nav .primary-nav-link:active,
          nav .primary-nav-item.is-active > a {
            background: transparent;
            border-bottom: solid #FF8850 9px;
          }
        }
        nav {
          width: calc(100vw - 20px);
        }
        nav nav {
          display: none;
          width: calc(100vw - 2px);
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 140px;
          z-index: 0;
        }
        .primary-nav-item.is-active > nav.has-subnav {
          display: flex;
        }

        /* Toggle Nav */
        .toggle-nav {
          cursor: pointer;
          font-family: "Montserrat", sans-serif;
          font-size: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;

          position: fixed;
          top: 1rem;
          right: 0;
          height: 32px;
          z-index: 1;
          padding: 0 18px;
        }
        @media(min-width: 480px) {
          .toggle-nav {
            height: 50px;
          }
        }
        .icon-close,
        .icon-hamburger {
          width: 24px;
          height: 24px;
          display: block;
          background: center center no-repeat;
          background-size: contain;
        }
        .icon-close {
          background-size: 18px;
          background-image: url(/static/components/navigation/close.svg);
        }
        .icon-hamburger {
          height: 100%;
          background-size: 24px;
          background-image: url(/static/components/navigation/hamburger.svg);
        }
        @media(min-width: 1100px) {
          .toggle-nav {
            display: none;
          }
          nav {
            position: relative;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          ul ul {
            border-left: none;
            display: block;
          }
          nav nav {
            width: unset;
            position: absolute;
            left: 0;
            top: 7rem;
            margin-left: 34px;
            padding-left: 8px;
            padding-left: 0;
          }
          header .white-background.main {
            background: rgba(255,255,255,0.95);
            width: 100%;
            height: 122px;
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
          }
          header.is-active .white-background.main {
          }
          header .white-background.sub {
            transition: background .44s .2s cubic-bezier(0.52, 0.16, 0.24, 1), max-height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
            max-height: 0;
          }
          header.is-active .white-background.sub {
            transition: background .36s cubic-bezier(0.32, 0.08, 0.24, 1), max-height .56s cubic-bezier(0.52, 0.16, 0.24, 1);
            position: absolute;
            height: 28rem;
            max-height: 505px;
            background: #fff;
            width: 100%;
            left: 0;
            top: 122px;
          }
          @keyframes fadein {
              from { opacity: 0; }
              to   { opacity: 1; }
          }
          @keyframes fadeout {
              from { opacity: 1; }
              to   { opacity: 0; }
          }

          header .black-background {
            animation: fadeout 0.4s;
          }
          header.is-active .black-background {
            animation: fadein 0.4s;
            opacity: 1;
            background: rgba(0,0,0,0.8);
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
          }
          .secundary-nav {
            transition: opacity 1s 0s;
            opacity: 0;
          }
          header.is-active .secundary-nav {
            transition: opacity .36s .56s;
            opacity: 1;
          }
          nav nav li {
            margin: 8px 0;
            min-height: 50px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          header.is-active nav nav a {
            white-space: nowrap;
            text-align: left;
            display: inline-block;
          }
        }

        @media(min-width: 480px) {
          .Navigation .icon:first-child {
            background-size: 34px;
            background-position: 15px 50%;
          }
          .Navigation .icon {
            background-size: 42px;
            background-position: 12px 50%;
          }
        }

        @media(min-width: 1100px) {
          .primary-nav-item {
          }
          .secundary-nav-link {
            width: fit-content;
          }
        }

      `}</style>
    </header>
  }
}

export default Navigation;
