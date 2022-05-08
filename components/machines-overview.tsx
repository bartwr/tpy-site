import {
  Component,
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from "framer-motion"
import * as R from 'ramda';
// import moment from 'moment';

import {MachineModel} from '../models/Machine';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const MachineSpecifications = dynamic(() => import('./machine-specifications.jsx'));
const MachineQuickView = dynamic(() => import('./machine-quickview.tsx'));

function getPreviousMachine(allMachines, theActiveMachine){   
  let foundIndex;
  for(let index in allMachines){
    const machine = allMachines[index];
    const machineId = machine.id;
    if(machineId === theActiveMachine.id) {
      foundIndex = parseInt(index);
    }
  }
  if(foundIndex > -1 && allMachines[foundIndex-1]) return allMachines[foundIndex-1];
  else if(foundIndex > -1 && ! allMachines[foundIndex-1]) return allMachines[allMachines.length-1];
  else if(! foundIndex) return theActiveMachine;
}

function getNextMachine(allMachines, theActiveMachine){   
  let foundIndex;
  for(let index in allMachines){
    const machine = allMachines[index];
    const machineId = machine.id;
    if(machineId === theActiveMachine.id) {
      foundIndex = parseInt(index);
    }
  }
  if(foundIndex > -1 && allMachines[foundIndex+1]) return allMachines[foundIndex+1];
  else if(foundIndex > -1 && ! allMachines[foundIndex+1]) return allMachines[0];
  else if(! foundIndex) return theActiveMachine;
}

const Machine = ({data, activeMachine, setActiveMachine}) => {

  return (
    <div
    className="
      Machine
      my-4
      w-full
      md:w-1/2
      lg:w-1/3
      my-2
      md:my-5
    "
    style={{
      height: '500px'
    }}
    >
      <motion.div
      whileHover={{
        boxShadow: '0px 8px 13px rgba(0, 0, 0, 0.2)'
      }}
      className="
        Machine-inner
        h-full
        flex
        flex-col
        md:mx-4
        relative
      "
      style={{
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
        <div className="Machine-quickView-wrapper">
          <motion.div className="
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
            cursor-pointer
            -mt-6
          " style={{
            backgroundColor: '#BAB1A1'
          }}
          onClick={() => setActiveMachine(data)}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          >
            quick view
          </motion.div>
        </div>
        <div className="
          Machine-body
          h-72 overflow-hidden
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
            {data.category}
          </span>
          <h1 className="
            Machine-title
            text-xl
            font-semibold
            font-montserrat
            text-theme-blue
            my-2
          ">
            {data.name}
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
          <div className="
            h-12
            w-full
            -mt-12
            absolute
            top-0
          " style={{
            backgroundImage: 'linear-gradient(transparent, white, white)'
          }}
          />
          <Link href={{ pathname: '/machines-details', query: {id: data.id}}}>
            <motion.a className="
              flex-1
              bg-white
              text-center
              flex
              flex-col
              justify-center
              h-11
              text-theme-orange
              cursor-pointer
            "
            whileHover={{ borderBottom: '8px solid rgb(255, 136, 80)' }}
            >
              more info
            </motion.a>
          </Link>
          <Link href={{ pathname: '/machines-details', query: {id: data.id, form: 1}}}>
            <motion.a className="
              flex-1
              bg-theme-orange
              text-center
              flex
              flex-col
              justify-center
              h-11
              text-white
              cursor-pointer
            "
            whileHover={{
              borderBottom: '8px solid rgba(0, 0, 0, 0.1)'
            }}
            >
              contact
            </motion.a>
          </Link>
        </footer>
      </motion.div>
      {(activeMachine && data.id === activeMachine.id) && <MachineQuickView onClose={
        () => {setActiveMachine({})}
      } machine={data} />}
    </div>
  )
}

const MachinesOverview = (props) => {
  const { searchQuery, machineType, machines } = props;

  const [activeMachine, setActiveMachine] = useState({});

  const machinesFilteredOnSearchQuery =
    R.filter((machine: MachineModel) => {
      // Create shorter variable name for searchQuery
      const q = searchQuery ? searchQuery.toLowerCase() : '';
      // If no search query is given: include every machine
      if(q === '') return true;
      // If search query is given: only return if query is found
      return machine.name.toLowerCase().indexOf(q) > -1
          || (machine.category && machine.category.toLowerCase().indexOf(q) > -1)
          || (machine.description && machine.description.toLowerCase().indexOf(q) > -1)
          || (machine.dimensions && machine.dimensions.toLowerCase().indexOf(q) > -1)
          || (machine.materials && machine.materials.toLowerCase().indexOf(q) > -1)
          || (machine.specstandard && machine.specstandard.toLowerCase().indexOf(q) > -1)
          || (machine.type && machine.type.toLowerCase().indexOf(q) > -1)
          || (machine.company && machine.company.name && machine.company.name.toLowerCase().indexOf(q) > -1)
    })

  const machinesFilteredOnMachineType =
    R.filter((machine: MachineModel) => {
      // If no machine type is given: return everything
      if(machineType === 'All' || ! machineType) return true;
      // If machine type is given: only return if relevant
      return machine.category === machineType;
    })

  const getFilteredMachines = (allMachines) => {
    let filteredMachines = allMachines || [];
    filteredMachines = machinesFilteredOnSearchQuery(filteredMachines);
    filteredMachines = machinesFilteredOnMachineType(filteredMachines);
    return filteredMachines;
  }

  let filteredMachines = getFilteredMachines(machines);

  useEffect(() => {
    const handler = (e) => {
      let filteredMachines = getFilteredMachines(machines);
      let machineToMakeActive;
      const direction = e.detail.direction;
      if(direction === 'left') {
        machineToMakeActive = getPreviousMachine(filteredMachines, e.detail.currentMachine);
      } else if(direction === 'right') {
        machineToMakeActive = getNextMachine(filteredMachines, e.detail.currentMachine);
      }
      setActiveMachine(machineToMakeActive);
    }
    document.addEventListener('clickPrevOrNextMachine', handler);
    return () => document.removeEventListener('clickPrevOrNextMachine', handler);
  }, [machines, searchQuery, machineType])

  return <div className="
    MachinesOverview
    text-base
    flex flex-wrap
    md:-mx-4
  ">
    {filteredMachines.map(x => {
      return <Machine key={x.id} data={x} activeMachine={activeMachine} setActiveMachine={setActiveMachine} />
    })}
  </div>
}

export default MachinesOverview;
