import {
  Component,
  useEffect,
  useState
} from 'react';
// import dynamic from 'next/dynamic';
// import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));

const Machine = (props) => {
  const {data} = props;

  return <div className="
    Machine
    my-4
    w-full
    md:w-1/2
    lg:w-1/3
  "
  key={data.title}
  style={{
    minHeight: '500px'
  }}
  >
    <div className="
      Machine-inner
      h-full
      flex
      flex-col
      md:mx-4
      relative
    " style={{
      boxShadow: '0px 2px 13px rgba(0, 0, 0, 0.2)'
    }}>
      <div className="
        Machine-image
        bg-center
        bg-no-repeat
        bg-cover
        w-full
        h-48
        mx-auto
      " style={{
        backgroundImage: `url('${data.image}')`
      }} />
      <div className="
        Machine-quickView
        uppercase
        font-montserrat
        text-md
        text-white
        opacity-90
        inline-block
        mx-auto
        w-36
        h-12
        text-center
        flex
        flex-col
        justify-center
        -mt-6
      " style={{
        backgroundColor: '#BAB1A1'
      }}>
        quick view
      </div>
      <div className="
        Machine-body
        py-6
        px-10
      ">
        <span className="
          text-theme-green
          font-bold
          text-sm
          uppercase
          inline-block
          font-montserrat
        ">
          {data.machineType}
        </span>
        <h1 className="
          Machine-title
          text-xl
          font-semibold
          font-montserrat
          text-theme-blue
          my-2
        ">
          {data.title}
        </h1>
        <div className="
          text-theme-black
        ">
          {data.description}
        </div>
      </div>
      <footer className="
        flex font-montserrat
        absolute
        bottom-0
        w-full
      ">
        <a className="
          flex-1
          bg-white
          text-center
          flex
          flex-col
          justify-center
          h-11
          text-orange
          cursor-pointer
        ">
          more info
        </a>
        <a className="
          flex-1
          bg-theme-orange
          text-center
          flex
          flex-col
          justify-center
          h-11
          text-white
          cursor-pointer
        ">
          contact
        </a>
      </footer>
    </div>
  </div>
}

const MachinesOverview = (props) => {
  // const { something } = props;

  const machines = [
    {
      title: "Cleanroom for solar panel assembly",
      description: "hardwall cleanroom with different zones and classes.",
      machineType: "Assembly",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Composites production",
      description: "Automated prepreg and fibre cutting.",
      machineType: "Composites production",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Composites design",
      description: "Composites design, using advanced 3D design and finite element analysis tool",
      machineType: "Engineering",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    }
  ]

  return <div className="
    MachinesOverview
    text-base
    flex flex-wrap
    md:-mx-4
  ">
    {machines.map(x => {
      return <Machine key={x.title} data={x} />
    })}
  </div>
}

export default MachinesOverview;
