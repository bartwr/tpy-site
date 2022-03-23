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
      onChange={(x) => {}}
      placeholder="Search a machine"
      classes="bg-no-repeat"
      style={{
        marginTop: 0,
        marginBottom: '20px',
        paddingLeft: '44px',
        backgroundPosition: '16px 50%',
        backgroundImage: `url('/static/components/machines-filter/icon-search.png')`
      }}
    />

  </div>
}

export default MachinesSearchBar;
