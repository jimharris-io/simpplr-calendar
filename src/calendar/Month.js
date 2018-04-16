import React from 'react';
import Day from './Day';

export default class Month extends React.Component {

  render() {

    const { month, year } = this.props;

    let c = 0,
      days = [],
      startDay,
      precedingMonth,
      d;

    // find first monday that precedes the beginning of the month (catches leading overflow days)
    while (new Date(year, month, 1 + c--).getDay() !== 1) {};
    startDay = c + 2;

    // adjust match criteria for looking back from january
    precedingMonth = month - 1;
    if (precedingMonth < 0) {
      precedingMonth = 11;
    }

    // days until end of month from start date (could be preceding month as well as this month)
    while ( new Date(year, month, startDay).getMonth() === precedingMonth ||
            new Date(year, month, startDay).getMonth() === month ) {
      d = new Date(year, month, startDay++);
      days.push(
        <Day key={`i${startDay}`} date={d} isOverflow={d.getMonth() !== month}/>
      );
    }

    // catch trailing overflow days (from end of month until first following sunday)
    while ( (new Date(year, month, startDay).getDay() !== 1 ) ) {
      d = new Date(year, month, startDay++);
      days.push(
        <Day key={`i${startDay}`} date={d} isOverflow/>
      );
    }

    return (
      <div className='grid'>
        { days }
      </div>
    )
  }
}