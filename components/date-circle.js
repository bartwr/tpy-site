import React, { Component } from 'react';
import moment from 'moment';

class DateCircle extends Component {
  render() {
    return <div className="DateCircle">
      <div className="date" title={moment(this.props.date).format('MMMM Do YYYY')}>
        <div className="date-month">
          {moment(this.props.date).format('MMM')}
        </div>
        <div className="date-number">
          {moment(this.props.date).format('D')}
        </div>
      </div>
      <style jsx>{`
        .DateCircle {
          z-index: 2;
          position: relative;
        }
        .date {
          width: 56px;
          height: 56px;
          background-color: #19baa2;
          background: url('/static/components/date-circle/date-background-oval.png') no-repeat center center / contain;
          margin: -28px auto 0;
          border-radius: 56px;
          color: #fff;
          text-align: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .date-month {
          height: 14px;
          color: #ffffff;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
        }
        .date-number {
          color: #ffffff;
          font-family: "Montserrat Bold", sans-serif;
          font-size: 22px;
          font-weight: 500;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  }
}

export default DateCircle;
