import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
import moment from 'moment';

// Import helpers
import {getNews, getNewsItem} from '../helpers/localStorage.js';
import {getEvents, getEventsItem} from '../helpers/localStorage.js';

// Import components
const NewsBlock = dynamic(() => import('./news-block.jsx'));
const EventBlock = dynamic(() => import('./event-block.jsx'));

const views = [
  'news',
  'events'
];

class HappeningOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: null,
      activeView: props.defaultView || 'news'
    }
  }
  async componentDidMount() {
    const items = this.state.activeView == 'news' ? await this.fetchNews() : await this.fetchEvents();
    this.setState({ items: items })
  }
  async fetchNews() {
    let items;
    items = await getNews()
    items = this.formatItems(items)
    items = this.filterItems(items)
    items = this.sortItems(items)
    return items;
  }
  async fetchEvents() {
    let items;
    items = await getEvents()
    items = this.formatItems(items)
    items = this.getFutureItemsOnly(items)
    items = this.filterItems(items)
    items = this.sortItems(items)
    return items;
  }
  formatItems(items) {
    return R.map(function(item) {
      return Object.assign({},
        item.fields,
        { datetime: item.sys.createdAt }
      )
    }, items)
  }
  filterItems(items) {
    // Limit amount of items
    items = R.slice(0, (this.props.limit || 20), items)
    // Return future items
    return items;
  }
  sortItems(items) {
    return items;
  }
  getFutureItemsOnly(items) {
    return R.filter(x => {
      const daysToEvent = moment(x.publishDate).diff(moment(), 'days')
      return daysToEvent >= 0;
    }, items);
  }
  async clickFilter(filter) {
    this.setState({
      activeView: filter
    });

    let items;
    if(filter == 'news') {
      items = await this.fetchNews();
    }
    if(filter == 'events') {
      items = await this.fetchEvents();
    }

    this.setState({ items: items })
  }
  render() {
    const self = this;
    const itemsToShow = R.filter((item) => {
      // Return if on overview page OR if item is not the active detail page
      return item.slug ==  '/happening' || document.location.pathname.indexOf(item.slug) <= -1;
    }, this.state.items || {});

    if(! this.state.items) return <div style={{minHeight: '800px'}} />
    return <div className="HappeningOverview flex flex-wrap flex-start">
      <nav className="filters show-on-desktop-only">
        <ul>
          <li className={this.state.activeView == 'news' ? 'is-active' : ''}>
            <a onClick={this.clickFilter.bind(this, 'news')}>
              News from TPY
            </a>
          </li>
          <li className={this.state.activeView == 'events' ? 'is-active' : ''}>
            <a onClick={this.clickFilter.bind(this, 'events')}>
              Programmes & Events
            </a>
          </li>
          {/*
          <li>
            <a href="#">Academy & Jobs</a>
          </li>

          Community members
          News from TPY
          Activities: programmes & events
          Academy & Jobs
          */}
        </ul>
      </nav>
      <div className="items">
        {R.map((idx) => {
          const item = this.state.items[idx];
          return self.state.activeView == 'events'
            ? <EventBlock key={idx} event={item} />
            : <NewsBlock key={idx} event={item} />;
        }, Object.keys(itemsToShow))}
      </div>
      <style jsx>{`
        .HappeningOverview {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto 48px;
        }
        .items {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          flex: 1;
        }
        .filters {
          width: 300px;
          max-width: 100%;
          margin-top: 20px;
          padding: 0 18px;
        }
        .filters ul, .filters li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .filters li {
          margin: 10px 0;
        }
        .filters a {
          cursor: pointer;
          font-family: Montserrat, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.5px;
          text-decoration: none;
          color: rgba(20, 67, 114, 0.5);
          border-bottom: solid transparent 8px;
        }
        .filters li.is-active a {
          color: #144372;
          cursor: cursor;
          display: inline-block;
          padding-bottom: 6px;
          border-bottom: solid #FF8850 8px;
        }
      `}</style>
    </div>
  }
}

export default HappeningOverview;
