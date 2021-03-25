import { Component } from 'react';
import dynamic from 'next/dynamic';
import * as R from 'ramda';
import moment from 'moment';

// Import helpers
import {getNews, getNewsItem} from '../helpers/localStorage.js';

// Import components
const NewsBlock = dynamic(() => import('./news-block.jsx'));

class HappeningOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: null
    }
  }
  async componentDidMount() {
    let items;
    items = await getNews()
    items = this.formatItems(items)
    items = this.filterItems(items)
    items = this.sortItems(items)
    this.setState({ items: items })
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
  render() {
    if(! this.state.items) return <div style={{minHeight: '800px'}} />
    return <div className="HappeningOverview">
      <nav className="filters" hidden>
        Filters
      </nav>
      <div className="items">
        {R.map((idx) => {
          const item = this.state.items[idx];
          return <NewsBlock key={idx} event={item} />
        }, Object.keys(this.state.items))}
      </div>
      <style jsx>{`
        .HappeningOverview {
          width: 1000px;
          max-width: 100%;
          margin: 0 auto 48px;
        }
        .items {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  }
}

export default HappeningOverview;
