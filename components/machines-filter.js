import { Component } from 'react';
// import dynamic from 'next/dynamic';
import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));

const MachinesFilterItem = (props) => {
  const {data} = props;

  return <a className="
    MachinesFilterItem
    font-montserrat
    text-md
    block
    mb-4
    cursor-pointer
  " style={{
    color: '#14437280'
  }}>
    {data.title}
  </a>
}

const MachinesFilter = (props) => {
  // const { something } = props;

  const categories = [
    {
      title: 'Category 1'
    },
    {
      title: 'Category 2'
    },
  ]

  return <section className="MachinesFilter text-base">
    <h1 className="
      text-theme-blue
      uppercase
      font-bold
      tracking-wide
      text-lg
      font-montserrat 
      mb-10
    ">
      Machine type
    </h1>
    {R.map(x => {
      return <MachinesFilterItem key={x.title} data={x} />
    }, categories)}
  </section>;
}

export default MachinesFilter;
