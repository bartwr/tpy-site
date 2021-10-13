import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Component } from 'react';
import * as R from 'ramda';
import sal from 'sal.js';

const timelineEvents = [
  {
    title: 1936,
    image: '1930.jpg',
    subTitle: 'Image: <a style="color: #a4a4a4" href="https://nl.wikipedia.org/wiki/Vliegveld_Ypenburg" target="_blank">National Aviation School</a>',
    description: 'The TPY location goes back to 1936 when Ypenburg airport was opened. Besides a hangar and shed for the airplanes, there was also a train station with restaurant from which you could see the activities of the National Aviation School.'
  },
  {
    title: "1950's",
    image: '1950.jpg',
    subTitle: 'Image: <a style="color: #a4a4a4" href="http://www.vofeypenburg.nl/ypenburg.htm" target="_blank">Ypenburg around the 1950’s</a>',
    description: 'Aircraft maintenance started which later under Fokker transitioned into a machining and composite aircraft parts production site.'
  },
  {
    title: 1996,
    image: '1991.jpg',
    subTitle: 'Image: <a style="color: #a4a4a4" href="http://www.vofeypenburg.nl/ypenburg.htm" target="_blank">Fokker Facility around the 1990’s</a>',
    description: 'Fokker closed this facility. As the airport was closed and the local area was redeveloped, the facility remained, attracting many new start up companies several of which in aviation aviation industry.'
  },
  {
    title: "2000’s",
    image: 'airborne.jpg',
    subTitle: 'Image: <a style="color: #a4a4a4" href="https://www.airborne.com/" target="_blank">Production at Airborne</a>',
    description: 'More and more companies started to settle at the former Fokker manufacturing site. Today we host many companies in the Aviation, Space, Medical, Semi Conductor industries to name a few.'
  },
  {
    title: "2017/2018",
    image: 'Kick-off TPY.jpg',
    subTitle: 'Image: Kick-Off TPY',
    description: 'The vision to establish the area as a Technology Park was initiated in 2017/8 by the Foundation Technology Centrum Ypenburg and the City which initially began with successful innovation collaboration project. This initiative has now transitioned into a thriving community furthering collaboration, innovation and attracting new companies as a focal point to grow the High tech Manufacturing industry in The Hague area.'
  },
  {
    title: "2021",
    image: 'Kitchen.jpg',
    subTitle: 'Image: TPY Community Center',
    description: 'The TPY Community Center and Scale-Up,  Innovation Center and Prototype Center was opened. We are now busy building up the TPY Community. Our aim is through cooperation our community will develop innovative solutions in the field of high-tech manufacturing!'
  }
]

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onMobile: true
    }
  }
  componentDidMount() {
    if(typeof window !== "undefined" && window.innerWidth >= 480) {
      this.setState({
        onMobile: false
      })
    }
    sal();
  }
  render() {
    let i = 0;
    return <div className="Timeline">
      <div className="container">
        {R.map(x => {
          i++;
          return <div
            className={`timeline-block ${i % 2 == 0 ? 'timeline-block-right' : 'timeline-block-left'}`}
            data-sal={`slide-${i % 2 == 0 ? 'right' : 'left'}`}
            data-sal-duration="100"
            data-sal-delay="100"
            data-sal-easing={this.state.onMobile ? `fade-in` : `ease-in-out`}
            >
            <div className="marker"></div>
            <div className="timeline-content">
               <h3>{x.title}</h3>
               <a href={`/static/components/timeline/${x.image}`} target="_blank" rel="external" className="block">
                <img src={`/static/components/timeline/${x.image}`} alt="Photo" className="timeline-photo" border="0" />
              </a>
               <span dangerouslySetInnerHTML={{__html: x.subTitle}} />
               <p dangerouslySetInnerHTML={{__html: x.description}} />
            </div>
          </div>
        }, timelineEvents)}
      </div>
      <style jsx>{`
      .Timeline {
        margin-top: 48px;
        margin-bottom: 48px;
      }
      .Timeline .container a {
        color: #144372;
      }
      .Timeline h1 {
         text-align: center;
         font-weight: 300;
         color: #777
      }

      .Timeline h1 span {
         font-weight: 600;
      }

      .Timeline .container {
         width: 80%;
         padding: 50px 0;
         margin: 50px auto;
         position: relative;
         overflow: hidden;
      }

      .Timeline .container::before {
         content: '';
         position: absolute;
         top: 0;
         left: 50%;
         margin-left: -1px;
         width: 2px;
         height: 100%;
         background: #144372;
         z-index: 1
      }

      .Timeline .timeline-block {
         width: -webkit-calc(50% + 8px);
         width: -moz-calc(50% + 8px);
         width: calc(50% + 8px);
         display: -webkit-box;
         display: -webkit-flex;
         display: -moz-box;
         display: flex;
         -webkit-box-pack: justify;
         -webkit-justify-content: space-between;
         -moz-box-pack: justify;
         justify-content: space-between;
         clear: both;
      }

      .Timeline .timeline-block-right {
         float: right;
      }

      .Timeline .timeline-block-left {
         float: left;
         direction: rtl
      }

      .Timeline .marker {
         width: 16px;
         height: 16px;
         border-radius: 50%;
         border: 2px solid #F5F7FA;
         background: #ff8850;
         margin-top: 10px;
         z-index: 9999
      }

      .Timeline .timeline-content {
         width: 95%;
         padding: 0 15px;
         color: #666
      }

      .Timeline .timeline-content h3 {
         margin-top: 5px;
         margin-bottom: 5px;
         font-size: 2.2rem;
         font-weight: 500
      }

      .Timeline .timeline-content span {
         font-size: 15px;
         color: #a4a4a4;
      }

      .Timeline .timeline-content p {
         word-spacing: 1px;
         color: #888;
      }
      
      .Timeline .timeline-photo {
        display: block;
        margin: 1rem 0;
      }

      @media screen and (max-width: 768px) {
         .Timeline .container:before {
            left: 8px;
            width: 2px;
         }
         .Timeline .timeline-block {
            width: 100%;
            margin-bottom: 30px;
         }
         .Timeline .timeline-block-right {
            float: none;
         }

         .Timeline .timeline-block-left {
            float: none;
            direction: ltr;
         }
      }

      .Timeline .timeline-content h3 {
         margin-top: 5px;
         margin-bottom: 5px;
         font-size: 2.2rem;
         font-weight: 500;
         font-family: Montserrat, sans-serif;
      }

      .Timeline .timeline-content span {
         font-size: 15px;
         color: #a4a4a4;
         font-family: Montserrat, sans-serif;
      }
      .Timeline .timeline-content span a {
        color: #a4a4a4;
      }
      `}</style>
    </div>
  }
}

export default Timeline;
