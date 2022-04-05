import {
  Component,
  useEffect,
  useState
} from 'react';
import dynamic from 'next/dynamic';
import config from "../config/config";
// import * as R from 'ramda';
// import moment from 'moment';

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));
// const EventBlock = dynamic(() => import('./event-block.jsx'));
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const FormInput = dynamic(() => import('./form-input.jsx'));
const FormSelect = dynamic(() => import('./form-select.jsx'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));

const sendMachineAvailabilityEmail = (data) => {
  console.log(data);
  return fetch(`${config.apiUrl}/mail/machine-availability`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

const PreferredDate = (props) => {
  const {
    index,
    handleChange,
    formState
  } = props;

  return (
    <>
      <SmallCapsTitle size="small">
        Preferred date {index}{index===1 ? '*' : ''}
      </SmallCapsTitle>
      <FormInput
        onChange={handleChange}
        value={formState[`preferredDate${index}`] || ''}
        type="date"
        name={`preferredDate${index}`}
        placeholder="Preferred date"
      />
      <FormInput
        onChange={handleChange}
        value={formState[`preferredDuration${index}`] || ''}
        type="text"
        name={`preferredDuration${index}`}
        placeholder="Preferred duration?"
      />
      <FormSelect
        onChange={handleChange}
        value={formState[`preferredDayPart${index}`] || ''}
        name={`preferredDayPart${index}`}
        placeholder="Preferred part of day?"
        options={[
          {
            value: 'Morning (9 - 12 am)',
            title: 'Morning (9 - 12 am)'
          },
          {
            value: 'Afternoon (1 - 5 pm)',
            title: 'Afternoon (1 - 5 pm)'
          }
        ]}
      />
    </>
  )
}

const MachineContactForm = (props) => {
  const {machine} = props;

  const [formState, setFormState] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    formState[e.target.name] = e.target.value;
    setFormState(formState);
    setCounter(counter+1)
  }

  const validateForm = (theFormState, requiredFields) => {
    let isValid = true;
    requiredFields.map(x => {
      if(! theFormState[x]) {
        isValid = false;
      }
    });
    return isValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'name', 'email', 'phone',
      'preferredDate1', 'preferredDuration1', 'preferredDayPart1'
    ]

    const isValid = validateForm(formState, requiredFields);

    if(! isValid) {
      alert('Please fill in all required fields');
      return;
    }

    // Now send email
    sendMachineAvailabilityEmail(Object.assign({},
      formState,
      {machine: machine}
    ));
    alert('Thank you for your request!')

    // Reset form
    setFormState([]);
  }

  return (
    <form
      className="font-montserrat text-theme-black text-3xl"
      onSubmit={handleSubmit}
    >
      <FormInput
        onChange={handleChange}
        type="text"
        value={formState.name || ''}
        name="name"
        required
        placeholder="Name*"
      />
      <FormInput
        onChange={handleChange}
        value={formState.email || ''}
        type="email"
        name="email"
        required
        placeholder="Email*"
      />
      <FormInput
        onChange={handleChange}
        value={formState.phone || ''}
        type="tel"
        name="phone"
        required
        placeholder="Phone number*"
      />
      {[1,2,3,4,5].map(x => {
        if(
          x === 1 || (
            formState[`preferredDate${x-1}`]
            && formState[`preferredDuration${x-1}`]
            && formState[`preferredDayPart${x-1}`]
          )
        ) {
          return <PreferredDate
            key={x}
            formState={formState}
            handleChange={handleChange}
            index={x}
          />
        } else {
          return;
        }
      })}
      <FormInput
        onChange={handleChange}
        value={formState.message || ''}
        type="textarea"
        name="message"
        placeholder="Message"
      />
      <Button type="submit">
        send message
      </Button>
      {machine && machine.company && machine.company.contactPhone && <p className="mt-20 mb-5 text-base">
        Would you rather call someone right away? <a href={`tel:${machine.company.contactPhone}`}>{machine.company.contactPhone}</a>
      </p>}
    </form>
  )
}

export default MachineContactForm;
