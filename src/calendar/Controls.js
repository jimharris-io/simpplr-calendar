import React from 'react';
import Select from './Select';

export default class Controls extends React.Component {

  render() {

    const { changeMonth, month, changeYear, year, previousMonth, nextMonth } = this.props;

    const months = [
      {value: 0, label: 'January'},
      {value: 1, label: 'February'},
      {value: 2, label: 'March'},
      {value: 3, label: 'April'},
      {value: 4, label: 'May'},
      {value: 5, label: 'June'},
      {value: 6, label: 'July'},
      {value: 7, label: 'August'},
      {value: 8, label: 'September'},
      {value: 9, label: 'October'},
      {value: 10, label: 'November'},
      {value: 11, label: 'December'}
    ];

    let years = [];
    for( let i = 2008; i < 2029; i = i + 1) {
      years.push({value: i, label: i});
    }

    return (
      <div>

        <button onClick={previousMonth}>Prev. month</button>
        <button onClick={nextMonth}>Next month</button>

        <Select contents={months} onChange={changeMonth} value={month}/>
        <Select contents={years} onChange={changeYear} value={year}/>

      </div>
    )
  }

}