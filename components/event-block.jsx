import dynamic from 'next/dynamic';
import { Component } from 'react';
import Link from 'next/link';
import marked from 'marked';

// Import components
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));
const Title = dynamic(() => import('./title.js'));
const DateCircle = dynamic(() => import('./date-circle.js'));

class EventBlock extends Component {
  render() {
    // const slug = this.props.event.datetime.split('T')[0] + '/' + this.props.event.slug
    const slug = this.props.event.slug
    const introText = this.props.event.introText.length <= 10 ? marked(this.props.event.detailedText).replace(/<\/?[^>]+(>|$)/g, '').substring(0, 200) : this.props.event.introText;
    return <Link href={`/events-item?slug=${slug}`} as={`/event/${slug}`}>
      <div className="EventBlock">
        <header style={{
          backgroundImage: `url( ${this.props.event.smallImage.fields.file.url} )`
        }} />
        <DateCircle date={this.props.event.publishDate || this.props.event.datetime} />
        <div className="info">
          {/*<SmallCapsTitle size="small">
            {this.props.event.category || 'design'}
          </SmallCapsTitle>*/}
          <Title size="small" style={{
          }}>
            {this.props.event.title}
          </Title>
          <p style={{
            color: '#0F2247'
          }}>
            {introText}        
          </p>
        </div>
        <div className="gradient" />
        <style jsx>{`
          .EventBlock {
            height: 524px;
            background: #fff;
            box-shadow: 0 2px 13px rgba(0, 0, 0, 0.2);
            margin: 20px 18px;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: all 0.2s;
          }
          @media(min-width: 480px) {
            .EventBlock {
              width: 306px;
            }
          }
          .EventBlock:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.2s;
            transition: all 0.4s cubic-bezier(.08,.82,.17,1);
            transform: scale(1.02);
          }
          .EventBlock p {
            font-size: 16px;
            line-height: 24px;
          }
          header {
            background: center center / cover no-repeat;
            height: 192px;
          }
          header::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            background: rgba(0,0,0,0.05);
            height: 192px;
          }
          .info {
            padding: 40px 28px;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
            font-family: "Montserrat", sans-serif;
          }
          .gradient {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            z-index: 1;
            background-image: linear-gradient(rgba(255, 255, 255, 0.3), #fff);
          }
        `}</style>
      </div>
    </Link>
  }
}

export default EventBlock;
