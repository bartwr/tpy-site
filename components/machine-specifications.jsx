import {
  Component,
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';
// import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));

const MachineSpecifications = (props) => {
  const {machine} = props;

  return (
    <div className="font-montserrat text-theme-black text-3xl">
      <p className="my-2">
        <b>Category:</b> Facility
      </p>
      <p className="my-2">
        <b>Materials:</b> Facility
      </p>
      <p className="my-2">
        <b>Spec/Standard:</b> ISO14644-1 class 8
      </p>
      <p className="my-2">
        <b>Dimensions:</b> Not specified
      </p>
      <p className="my-2">
        <b>Company:</b> GTM
      </p>
    </div>
  )
}

export default MachineSpecifications;
