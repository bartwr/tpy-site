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

const MachineQuickView = (props) => {
  const {machine, onClose} = props;

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
  " style={{
    backgroundColor: 'rgba(241, 239, 236, 0.8)'
  }}>
    <div className="
      MachineQuickView-inner
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
    }}>
      <div className="
        w-full
        md:w-1/4
        mb-8
        md:mb-0
      ">
        <img src="https://i.imgur.com/83Ovq2V.jpeg" />
      </div>
      <div className="
        w-full
        md:w-3/4
      ">
        <div className="mx-4 md:mx-14">
          <Title style={{marginBottom: '20px'}}>
            {machine.title}
          </Title>
          <div className="font-montserrat text-theme-black text-3xl">
            <p className="my-2">
              <b>Category:</b> Facility
            </p>
            <p className="my-2">
              <b>Materials:</b> Facility
            </p>
            <p className="my-2">
              <b>Spec/Standard:</b> ISO14644-1 class 8
            </p>
            <p className="my-2">
              <b>Dimensions:</b> Not specified
            </p>
            <p className="my-2">
              <b>Company:</b> GTM
            </p>
            <p className="my-2 mt-4">
              <a href="#" className="
                text-theme-orange
                text-base
                no-underline
              ">
                View full item
              </a>
            </p>
          </div>
          <div className="
            flex
            justify-between
            mt-12
            w-full
          ">
            <div>
              <Button target="_blank" buttonLink={'#'}>
                contact
              </Button>
            </div>
            <div className="flex flex-col justify-center">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                onClose ? onClose() : ''
              }}>
                Sluiten
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Machine = (props) => {
  const {data} = props;

  const [doShowQuickView, setDoShowQuickView] = useState(false)

  return <div className="
    Machine
    my-4
    w-full
    md:w-1/2
    lg:w-1/3
    my-2
    md:my-5
  "
  key={data.title}
  style={{
    minHeight: '500px'
  }}
  >
    <div className="
      Machine-inner
      h-full
      flex
      flex-col
      md:mx-4
      relative
    " style={{
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
      <div className="
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
      >
        quick view
      </div>
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
          {data.machineType}
        </span>
        <h1 className="
          Machine-title
          text-xl
          font-semibold
          font-montserrat
          text-theme-blue
          my-2
        ">
          {data.title}
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
        <a className="
          flex-1
          bg-white
          text-center
          flex
          flex-col
          justify-center
          h-11
          text-orange
          cursor-pointer
        ">
          more info
        </a>
        <a className="
          flex-1
          bg-theme-orange
          text-center
          flex
          flex-col
          justify-center
          h-11
          text-white
          cursor-pointer
        ">
          contact
        </a>
      </footer>
    </div>
    {doShowQuickView && <MachineQuickView onClose={
      () => {setDoShowQuickView(false)}
    } machine={data} />}
  </div>
}

const MachinesOverview = (props) => {
  // const { something } = props;

  const machines = [
    {
      title: "Cleanroom for solar panel assembly",
      description: "hardwall cleanroom with different zones and classes.",
      machineType: "Assembly",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Composites production",
      description: "Automated prepreg and fibre cutting.",
      machineType: "Composites production",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    },
    {
      title: "Composites design",
      description: "Composites design, using advanced 3D design and finite element analysis tool",
      machineType: "Engineering",
      image: "https://i.imgur.com/83Ovq2V.jpeg"
    }
  ]

  return <div className="
    MachinesOverview
    text-base
    flex flex-wrap
    md:-mx-4
  ">
    {machines.map(x => {
      return <Machine key={x.title} data={x} />
    })}
  </div>
}

export default MachinesOverview;
