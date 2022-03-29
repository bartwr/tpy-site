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
  if(! machine) return <div />

  return (
    <div className="font-montserrat text-theme-black text-3xl">
      {machine.category && <p className="my-2">
        <b>Category:</b> {machine.category}
      </p>}
      {machine.materials && <p className="my-2">
        <b>Materials:</b> {machine.materials}
      </p>}
      {machine.specstandard && <p className="my-2">
        <b>Spec/Standard:</b> {machine.specstandard}
      </p>}
      {machine.dimensions && <p className="my-2">
        <b>Dimensions:</b> {machine.dimensions}
      </p>}
      {machine.company && <p className="my-2">
        <b>Company:</b> <a href={machine.company.website} target="_blank" rel="external">
          {machine.company.name}
        </a>
      </p>}
    </div>
  )
}

export default MachineSpecifications;
