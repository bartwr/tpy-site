import {
  Component,
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
// import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('../components/small-caps-title.js'));
const MachinesOverview = dynamic(() => import('../components/machines-overview.js'));
const MachinesFilter = dynamic(() => import('../components/machines-filter.js'));
const MachinesSearchBar = dynamic(() => import('../components/machines-search-bar.js'));
const MachineContactForm = dynamic(() => import('../components/machine-contact-form.jsx'));
const MachineSpecifications = dynamic(() => import('../components/machine-specifications.jsx'));

const MachineDetails = (props) => {
  const router = useRouter()
  const {machine} = props;
  const urlPath = router.query;
  console.log(urlPath);
  // if(! machine) return <></>

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap px-4 mb-16 max-width sm:mx-auto">
        <div className="
          w-full
          md:w-2/5
          md:pr-4
        ">
          <div className="my-2">
            <SmallCapsTitle color="#14B586">
              category
            </SmallCapsTitle>
          </div>
          <Title>
            Cleanroom for solar panel assembly
          </Title>
          <div className="my-2">
            <p>
              Hardwall cleanroom with different zones and classes. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="my-16">
            <MachineSpecifications machine={props.machine} />
          </div>

          <Button href="#">
            Contact
          </Button>
        </div>
        <div className="
          mt-8
          md:mt-8
          w-full
          md:w-3/5
          md:pl-4
        ">
          <MachineContactForm machine={props.machine} />

          <img src="https://i.imgur.com/83Ovq2V.jpeg" />

          <div className="my-8">
            <p>
              <b>Description:</b><br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>
      <div className="max-width px-4 md:px-0 md:mx-auto">
        <Title>More machines</Title>
        
        <div className="
          flex flex-wrap md:flex-nowrap mt-6 mb-16
          max-width sm:mx-auto
        ">
          <div className="
            w-full
          ">
            <MachinesSearchBar />
            <MachinesOverview />
          </div>
        </div>

      </div>
    </>
  )
}

export default MachineDetails;
