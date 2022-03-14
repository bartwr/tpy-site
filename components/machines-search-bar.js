import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
const FormInput = dynamic(() => import('./form-input.jsx'));

const MachinesSearchBar = (props) => {
  // const { something } = props;

  return <div className="MachinesSearchBar">
    <FormInput
      name="q"
      value=""
      placeholder="Type in a search query"
    />
  </div>
}

export default MachinesSearchBar;
