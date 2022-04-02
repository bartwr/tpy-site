import { Component } from 'react';
import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";
import HappeningOverview from "../components/happening-overview";
import Title from "../components/title";

const Navigation = dynamic(() => import('../components/navigation.jsx'));
const FooterBanner = dynamic(() => import('../components/footer-banner.js'));
const Footer = dynamic(() => import('../components/footer.js'));
const PageHeader = dynamic(() => import('../components/page-header.js'));

class Happening extends Component {
    static async getInitialProps({ query }) {
        return { defaultView: query.defaultView }
    }

    render() {
        return <div className="HappeningPage">
            <Head>

                <title key="title">Happening | TPY</title>

                <meta key="og:title" property="og:title" content="Happening | Technology Park Ypenburg" />
                <meta key="og:description" property="og:description" content="We are the top location for tech events in the Hague, from workshops to Meetups to festivals to hackathons and more! Join an event or host your own in a lively and fun atmosphere at Technology Park Ypenburg." />
                <meta key="description" name="description" content="We are the top location for tech events in the Hague, from workshops to Meetups to festivals to hackathons and more! Join an event or host your own in a lively and fun atmosphere at Technology Park Ypenburg." />

            </Head>
            <Navigation />
            <div>
                <PageHeader
                    image="/static/pages/campus/tpy-campus-header-image.jpg"
                    smallCapsTitle="what is happening"
                    smallCapsTitleColor="white"
                    title="Everyday is full of great opportunities"
                />
                {/*<IntroText></IntroText>*/}
                <div className="flex flex-wrap" style={{
                    width: '1000px',
                    maxWidth: '100%',
                    margin: '0px auto 48px',
                }}>
                    <div style={{
                        width: '300px',
                        maxWidth: '100%'
                    }} className="show-on-desktop-only" />
                    <div className="flex flex-1" style={{
                        marginLeft: '20px',
                        marginTop: '112px'
                    }}>
                        <Title>
                            What is happening?
                        </Title>
                    </div>
                </div>
                <HappeningOverview defaultView={this.props.defaultView} />
            </div>
            <div>
                <FooterBanner
                    title="Come and see for yourself what Technology Park Ypenburg has to offer you!"
                    buttonText="book a tour"
                    buttonLink="/contact"
                    target="_top"
                />
            </div>
            <Footer />
            <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
      }
      body {
        font-size: 8px;
      }
      img {
        max-width: 100%;
      }
      /* Noe Display */
      @font-face {
          font-family: 'Noe Display';
          src: url("/static/fonts/noe-display/noe-display-regular.ttf") format("opentype");
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'Noe Display';
          src: url("/static/fonts/noe-display/noe-display-bold.ttf") format("opentype");
          font-weight: bold;
          font-style: normal;
      }
      /* Maison Mono */
      @font-face {
          font-family: 'maison_monobold';
          src: url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_bold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monoitalic';
          src: url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_italic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monolight';
          src: url('/static/fonts/maison-mono/maison_mono_light-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_light-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_monoregular';
          src: url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-mono/maison_mono_regular-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      /* Montserrat */
      @font-face {
          font-family: 'maison_neuebook_italic';
          src: url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebookitalic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold_italic';
          src: url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebolditalic_1-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold';
          src: url('/static/fonts/maison-neue/maisonneuebold-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebold-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'Montserrat';
          src: url('/static/fonts/maison-neue/maisonneuebook-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebook-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
      @font-face {
          font-family: 'maison_neuebold_italic';
          src: url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff2') format('woff2'),
               url('/static/fonts/maison-neue/maisonneuebolditalic-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }
    `}</style>
        </div>
    }
}

export default Happening;
