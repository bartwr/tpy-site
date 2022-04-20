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
  const { onUpdate } = props;
  const delay = 250;
  let TO_delay;

  const handleChange = (e) => {
    if(TO_delay) clearTimeout(TO_delay);
    TO_delay = setTimeout(x => {
      // Save in localStorage
      localStorage.setItem('TPY__machines_search_query', e.target.value);
      // Update state
      if(! onUpdate) return;
      onUpdate(e.target.value);
    }, delay)
  }

  const searchQueryFromLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('TPY__machines_search_query') || '' : '';

  return <div className="MachinesSearchBar">
    <FormInput
      name="q"
      type="search"
      defaultValue={searchQueryFromLocalStorage}
      onChange={handleChange}
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
