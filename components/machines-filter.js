import { Component, useState } from 'react';
// import dynamic from 'next/dynamic';
import * as R from 'ramda';
import { motion } from "framer-motion"

// Import helpers
import {fetchMachineTypes} from '../helpers/machines.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));

const MachinesFilterItem = (props) => {
  const {title, handleClick, isActive} = props;

  return <a className="
    MachinesFilterItem
    font-montserrat
    text-md
    block
    mb-2
    cursor-pointer
  " onClick={() => handleClick(title)}>
    <motion.span className="inline-block" style={{
      color: isActive ? '#144372' : '#14437280',
      borderBottom: isActive ? 'solid #FF8850 8px' : 'solid transparent 8px'
    }}
    whileHover={{ color: '#144372' }}
    >
      {title}
    </motion.span>
  </a>
}

const MachinesFilter = (props) => {
  const {machines, machineType, onUpdate} = props;

  const categories = fetchMachineTypes(machines);

  const handleClick = (title) => {
    // Save in localStorage
    localStorage.setItem('TPY__machines_machine_type', title);
    // Update state
    onUpdate(title)
  }

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
    <MachinesFilterItem
      key="All"
      title="All"
      isActive={machineType === 'All'}
      handleClick={handleClick}
    />
    {R.map(x => {
      return  <MachinesFilterItem
                key={x}
                title={x}
                isActive={machineType === x}
                handleClick={handleClick}
              />
    }, categories)}
  </section>
}

export default MachinesFilter;
