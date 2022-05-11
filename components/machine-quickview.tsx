import {
  Component,
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from "framer-motion"
import * as R from 'ramda';

import {MachineModel} from '../models/Machine';

const Title = dynamic(() => import('./title.js'));
const MachineSpecifications = dynamic(() => import('./machine-specifications.jsx'));
const Button = dynamic(() => import('./button.js'));

type MachineQuickViewProps = {
  machine: MachineModel;
  onClose?: Function;
};

const MachineQuickView = (props) => {
  const {machine, onClose}: MachineQuickViewProps = props;

  useEffect(() => {
    const keyPressed = (e) => {
      e = e || window.event
      // left arrow
      if(e.keyCode === 37)
        navigateHandler('left', machine);
      // right arrow
      else if(e.keyCode === 39)
        navigateHandler('right', machine);
      // escape key
      else if(e.keyCode === 27)
        onClose();
    }
    const initNavigationShortcuts = () => {
      document.onkeydown = keyPressed;
    };
    initNavigationShortcuts();
    return () => {
      document.onkeydown = null;
    }
  }, [props.machine]);

  const closeHandler = (e) => {
    e.preventDefault();
    onClose ? onClose() : ''
  }

  const navigateHandler = (direction, currentMachine) => {
    const event = new CustomEvent("clickPrevOrNextMachine", {
      detail: {
        direction: direction,
        currentMachine: currentMachine
      },
    });
    document.dispatchEvent(event);
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
      className="
        button-previous
        fixed
        left-10
        cursor-pointer
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        navigateHandler('left', machine);
      }}
      >
      <img src="/static/components/machine-quickview/arrow-left.svg" />
    </motion.div>
    <motion.div
      className="
        button-next
        fixed
        right-10
        cursor-pointer
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        navigateHandler('right', machine);
      }}
      >
      <img src="/static/components/machine-quickview/arrow-right.svg" />
    </motion.div>
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
          {Title && <Title style={{marginBottom: '20px'}}>
            {machine.name}
          </Title>}
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
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
}

export default MachineQuickView;