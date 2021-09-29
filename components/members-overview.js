import dynamic from 'next/dynamic';
import { Component } from 'react';
import * as R from 'ramda';

const Title = dynamic(() => import('../components/title.js'));

const members = [
  {
    title: 'Exasun',
    url: 'https://exasun.com',
    image: 'exasun.svg'
  },
  {
    title: 'Unified International',
    url: 'https://unifiedinternational.net',
    image: 'unified-international.png'
  },
  {
    title: 'KVE',
    url: 'https://www.kve.nl',
    image: 'kve.jpg'
  },
  {
    title: 'Airborne',
    url: 'https://www.airborne.com',
    image: 'airborne.png'
  },
  {
    title: 'Promolding',
    url: 'https://www.promolding.nl/en/',
    image: 'promolding.jpg'
  },
  {
    title: 'GTM-AS',
    url: 'https://gtm-as.com',
    image: 'gtm.png'
  },
  // {
  //   title: 'InHolland',
  //   url: 'https://www.inholland.nl/',
  //   image: 'inholland.svg'
  // },
  {
    title: 'TU Delft',
    url: 'https://www.tudelft.nl/',
    image: 'tu-delft.svg'
  },
  {
    title: 'Hittech',
    url: 'https://hittech.com/en/',
    image: 'hittech.jpeg'
  },
  {
    title: 'Light Tree Ventures',
    url: 'https://www.lighttreeventures.com',
    image: 'lighttree.svg'
  },
  {
    title: 'Project Dragonfly',
    url: 'https://projectdragonfly.nl',
    image: 'project-dragonfly.jpg'
  },
  {
    title: 'QLayers',
    url: 'https://www.qlayers.com',
    image: 'qlayers.jpg'
  },
  {
    title: 'ZeroAvia',
    url: 'https://www.zeroavia.com',
    image: 'zero-avia.jpg'
  },
  {
    title: 'Chapter8',
    url: 'https://chapter8.com',
    image: 'chapter8.svg'
  },
  {
    title: 'Robin Radar',
    url: 'https://www.robinradar.com',
    image: 'robin.jpeg'
  },
  {
    title: 'SITA',
    url: 'https://www.sita.aero',
    image: 'sita.svg'
  },
  {
    title: 'Somni',
    url: 'https://www.somnisolutions.com',
    image: 'somni.webp'
  }
];

class MembersOverview extends Component {
  render() {
    return <div className="MembersOverview max-width">
      <div>
        <Title>
          Our members include
        </Title>
      </div>
      <div className="MembersOverview-logos flex flex-wrap text-center">
        {R.map((member) => {
          return <p className="MembersOverview-logo">
            <a href={member.url} target="_blank" title={member.title} style={{
              backgroundImage: `url("/static/pages/community/logos/${member.image}")`
            }}>
              <span hidden>{member.title}</span>
              <img src={`/static/pages/community/logos/${member.image}`} className="block" alt={'Logo ' + member.title} />
            </a>
          </p>
        }, members)}
      </div>
      <style jsx>{`
      .max-width {
        margin: 0 auto;
        width: 649px;
        max-width: 100%;
        padding: 0 24px;
        position: relative;
      }
      .text-center {
        text-align: center;
      }
      .flex-wrap {
        flex-wrap: wrap;
      }
      .MembersOverview-logo {
        margin: 0 auto;
      }
      @media(min-width: 480px) {
        .MembersOverview-logo {
          width:49%;
        }
      }
      .MembersOverview-logo a {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .MembersOverview-logo a * {
        display: none;
      }
      `}</style>
    </div>
  }
}

export default MembersOverview;
