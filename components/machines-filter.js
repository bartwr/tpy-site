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

  return <div className="
    MachinesFilterItem
  ">
    {data.title}
  </div>
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

  return <div className="MachinesFilter text-base">
    {R.map(x => {
      return <MachinesFilterItem key={x.title} data={x} />
    }, categories)}
  </div>;
}

export default MachinesFilter;
