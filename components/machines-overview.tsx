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

type MachineQuickViewProps = {
  machine: MachineModel;
  onClose?: Function;
};

const MachineQuickView = (props) => {
  const {machine, onClose}: MachineQuickViewProps = props;

  const closeHandler = (e) => {
    e.preventDefault();
    onClose ? onClose() : ''
  }

  return <div className="
    fixed
    top-0
    right-0
    bottom-0
    left-0
    flex
    flex-col
    justify-center
    z-10
    max-h-full
    overflow-auto
  "
  >
    <motion.div className="
      absolute
      top-0
      right-0
      bottom-0
      left-0
    " style={{
      backgroundColor: 'rgba(241, 239, 236, 0.8)'
    }}
    onClick={closeHandler}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    />
    <motion.div
      animate={{ opacity:1, scale:1 }}
      initial={{ opacity:0.6, scale:0.6 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.2 }}
      className="
        MachineQuickView-inner
        relative
        bg-white
        mt-10
        md:mt-0
        p-6
        mx:p-10
        mx-auto
        flex
        flex-wrap
        md:flex-nowrap
      " style={{
        maxWidth: '872px',
        width: '100%'
      }}
    >
      <div className="
        w-full
        md:w-2/5
        mb-8
        md:mb-0
      ">
        <img src="https://i.imgur.com/83Ovq2V.jpeg" />
      </div>
      <div className="
        w-full
        md:w-3/5
      ">
        <div className="pl-4 pr-4 md:pl-14">
          <Title style={{marginBottom: '20px'}}>
            {machine.name}
          </Title>
          <MachineSpecifications machine={machine} />
          <p className="my-2 mt-4">
            <Link href={{ pathname: '/machines-details', query: {id: machine ? machine.id : ''}}}>
              <a className="
                text-theme-orange
                text-base
                no-underline
              " onClick={() => onClose}>
                View full item
              </a>
            </Link>
          </p>
          <div className="
            flex
            justify-between
            mt-12
            w-full
          ">
            <div>
              <Link href={{ pathname: '/machines-details', query: {id: machine ? machine.id : '', form: 1}}}>
                <Button onClick={onClose}>
                  contact
                </Button>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <a href="#" onClick={closeHandler}>
                Sluiten
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
}

const Machine = (props) => {
  const {data} = props;

  const [doShowQuickView, setDoShowQuickView] = useState(false)

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
      minHeight: '500px'
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
        onClick={() => setDoShowQuickView(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
          quick view
        </motion.div>
        <div className="
          Machine-body
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
            whileHover={{ fontStyle: 'italic' }}
            whileTap={{ fontStyle: 'italic' }}
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
            whileHover={{ fontStyle: 'italic' }}
            whileTap={{ fontStyle: 'italic' }}
            >
              contact
            </motion.a>
          </Link>
        </footer>
      </motion.div>
      {doShowQuickView && <MachineQuickView onClose={
        () => {setDoShowQuickView(false)}
      } machine={data} />}
    </div>
  )
}

const MachinesOverview = (props) => {
  const { searchQuery, machineType, machines } = props;

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
          || (machine.type && machine.type.toLowerCase().indexOf(q) > -1);
    })

  const machinesFilteredOnMachineType =
    R.filter((machine: MachineModel) => {
      // If no machine type is given: return everything
      if(machineType === 'All' || ! machineType) return true;
      // If machine type is given: only return if relevant
      return machine.category === machineType;
    })

  let filteredMachines = machines || [];
  filteredMachines = machinesFilteredOnSearchQuery(filteredMachines);
  filteredMachines = machinesFilteredOnMachineType(filteredMachines);

  return <div className="
    MachinesOverview
    text-base
    flex flex-wrap
    md:-mx-4
  ">
    {filteredMachines.map(x => {
      return <Machine key={x.id} data={x} />
    })}
  </div>
}

export default MachinesOverview;
