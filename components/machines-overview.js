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
    m-2
  " key={data.title}>
    <div className="
      Machine-image
      bg-center
      bg-no-repeat
      bg-cover
      w-10
      h-10
      mx-auto
    " style={{
      backgroundImage: `url('${data.image}')`
    }} />
    <h1 className="
      Machine-title
      text-lg
      font-bold
    ">
      {data.title}
    </h1>
  </div>
}

const MachinesOverview = (props) => {
  // const { something } = props;

  const machines = [
    {
      title: "Whatever 1",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Whatever 2",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Whatever 3",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Whatever 4",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Whatever 5",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Whatever 6",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    }
  ]

  return <div className="
    MachinesOverview text-base
  ">
    {machines.map(x => {
      return <Machine key={x.title} data={x} />
    })}
  </div>
}

export default MachinesOverview;
