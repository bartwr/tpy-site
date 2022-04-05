import {
  Component,
  useEffect,
  useState
} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
// import * as R from 'ramda';
// import moment from 'moment';
import {fetchMachines} from '../helpers/machines.js';

import {MachineModel, MachineDefaultValues} from '../models/Machine'

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const MachinesOverview = dynamic(() => import('../components/machines-overview'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.jsx'));
const MachineContactForm = dynamic(() => import('../components/machine-contact-form.jsx'));
const MachineSpecifications = dynamic(() => import('../components/machine-specifications.jsx'));

const MachineDetails = (props) => {
  // Get machine type filter from localStorage
  const machineTypeFilter = typeof window !== 'undefined' ? localStorage.getItem('TPY__machines_machine_type') : 'All';
  // State definitions
  const [machines, setMachines] = useState([])
  const [machine, setMachine] = useState(MachineDefaultValues)
  const [machineType, setMachineType] = useState(machineTypeFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter()
  const queryParams = router.query;

  const fetchMachinesAndStoreInState = async () => {
    const machineObjects = await fetchMachines();
    setMachines(machineObjects);
  }

  const fetchMachine = (machines, machineId) => {
    if(! machines) return {}
    if(! machineId) return {}
    const currentMachine: MachineModel = machines.filter(x => x.id === machineId, machines)[0];
    setMachine(currentMachine);
  }

  useEffect(() => {
    fetchMachinesAndStoreInState();
  }, [])

  useEffect(() => {
    fetchMachine(machines, queryParams.id);
  }, [machines, queryParams])

  if(! machine) return <></>

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap px-4 mb-16 max-width sm:mx-auto">
        <div className="
          w-full
          md:w-2/5
          md:pr-4
        ">

          {/* Show category */}
          {! queryParams.form && <>
            <div className="my-2">
              <SmallCapsTitle color="#14B586">
                {machine && machine.category ? machine.category : ''}
              </SmallCapsTitle>
            </div>
          </>}
          {/* If form is visible: show 'Check availability' */}
          {queryParams.form && <>
            <div className="my-2">
              <SmallCapsTitle color="#FF8850">
                CHECK AVAILABILITY
              </SmallCapsTitle>
            </div>
          </>}
          
          <Title>
            {machine ? machine.name : ''}
          </Title>

          {! queryParams.form && <>
            <div className="my-2">
              <p>
                {machine && machine.description ? machine.description : ''}
              </p>
            </div>
            <div className="my-16">
              <MachineSpecifications machine={machine} />
            </div>
            <Button href={{ pathname: '/machines-details', query: {id: machine.id, form: 1}}}>
              Contact
            </Button>
          </>}

          {queryParams.form && <>
            <p className="my-4">
              <img src={machine.image ? machine.image : ''} />
            </p>
            <Link href={{ pathname: '/machines-details', query: {id: machine.id}}}>
              <span className="text-base cursor-pointer">
                &laquo; Machine details
              </span>
            </Link>
          </>}

        </div>
        <div className="
          mt-8
          md:mt-8
          w-full
          md:w-3/5
          md:pl-4
        ">
          {! queryParams.form && <img src="https://i.imgur.com/83Ovq2V.jpeg" />}

          {  queryParams.form && <MachineContactForm machine={machine} />}

          <div hidden className="my-8">
            <p>
              <b>Description:</b><br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
      <div className="max-width px-4 md:px-0 md:mx-auto">
        <Title>More machines</Title>
        
        <div className="flex flex-wrap md:flex-nowrap md:mx-4 mt-6 mb-16 max-width sm:mx-auto md:px-4">
          <div className="
            w-full
            md:w-1/4
          ">
            <MachinesFilter machines={machines} machineType={machineType} onUpdate={setMachineType} />
          </div>
          <div className="
            w-full
            md:w-3/4
          ">
            <MachinesSearchBar onUpdate={setSearchQuery} />
            <MachinesOverview machines={machines} searchQuery={searchQuery} machineType={machineType} />
          </div>
        </div>
        {/*
        <div className="
          flex flex-wrap md:flex-nowrap mt-6 mb-16
          max-width sm:mx-auto
        ">
          <div className="
            w-full
          ">
            <MachinesSearchBar onUpdate={setSearchQuery} />
            <MachinesOverview searchQuery={searchQuery} />
          </div>
        </div>
*/}
      </div>
    </>
  )
}

export default MachineDetails;
