import {
  Component,
  useEffect,
  useState
} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import * as R from 'ramda';
// import moment from 'moment';

// Import models
// import {MachineModel, MachineDefaultValues} from '../models/Machine'

// Import helpers
// import {getNews, getEvents} from '../helpers/localStorage.js';

// Import components
// const NewsBlock = dynamic(() => import('./news-block.jsx'));

const Breadcrumb = ({isActive, title, href}) => {
  if(href) {
    return (
      <span className="inline-block mr-3 font-semibold" style={{
        color: `rgba(20, 67, 114, ${isActive ? '1' : '0.5'})`
      }} title={title.length >= 24 ? title : ''}>
        <Link href={href}>
          {title.length >= 24 ? title.substring(0, 24-3) + '...' : title}
        </Link>
      </span>
    )
  }
  return (
    <span className="inline-block mr-3 font-semibold" style={{
      color: `rgba(20, 67, 114, ${isActive ? '1' : '0.5'})`
    }} title={title.length >= 24 ? title : ''}>
      {title.length >= 24 ? title.substring(0, 24-3) + '...' : title}
    </span>
  )
}

const BreadcrumbSeperator = (props) => {
  return (
    <span className="inline-block mr-3 font-semibold" style={{
      color: 'rgba(20, 67, 114, 1)'
    }}>
      &gt;
    </span>
  )
}

const Breadcrumbs = ({crumbs}) => {
  if(! crumbs || crumbs.length === 0) {
    return <div />
  }

  return (
    <div className="text-base font-montserrat font-semibold">
      {crumbs.map((x, idx) => {
        return <div className="inline-block" key={x.title}>
          <Breadcrumb
            href={x.href}
            title={x.title}
            isActive={x.isActive}
          />
          {idx !== crumbs.length-1 && <BreadcrumbSeperator />}
        </div>
      })}
    </div>
  )
}

export default Breadcrumbs;
