import React from 'react';
import Month from './Month';
import Controls from './Controls';

import { monthNameToIndex, indexToMonthName } from './Utils';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);

    const month = props.match.params.month ? monthNameToIndex(props.match.params.month) : new Date().getMonth();
    let year = parseInt(props.match.params.year, 10) || new Date().getFullYear();

    this.state = {
      month: month,
      year: year
    };

    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeYear = this.changeYear.bind(this);
  }

  changeMonth(e) {
    this.setState({
      month: parseInt(e.target.value, 10)
    });
    this.props.history.push(`/${indexToMonthName(e.target.value)}/${this.state.year}`)
  }

  changeYear(e) {
    this.setState({
      year: parseInt(e.target.value, 10)
    });
    this.props.history.push(`/${indexToMonthName(this.state.month)}/${parseInt(e.target.value, 10)}`)
  }

  previousMonth() {
    let m = this.state.month - 1;
    if (m < 0) {
      m = 11;
      this.setState({
        year: this.state.year - 1
      }, ()=> this.props.history.push(`/${indexToMonthName(this.state.month)}/${this.state.year}`) )
    }
    this.setState({
      month: m
    }, ()=> this.props.history.push(`/${indexToMonthName(this.state.month)}/${this.state.year}`) )
  }

  nextMonth() {
    let m = this.state.month + 1;
    if (m > 11) {
      m = 0;
      this.setState({
        year: this.state.year + 1
      },()=>  ()=> this.props.history.push(`/${indexToMonthName(this.state.month)}/${this.state.year}`) )
    }
    this.setState({
      month: m
    }, ()=> this.props.history.push(`/${indexToMonthName(this.state.month)}/${this.state.year}`) );

  }

  render() {

    const long = new Date(this.state.year, this.state.month, 1).toLocaleString('en-gb', { month: "long" } );

    return (
      <div className='calendar'>

        <Controls
          month={this.state.month}
          year={this.state.year}
          changeMonth={this.changeMonth}
          changeYear={this.changeYear}
          previousMonth={this.previousMonth}
          nextMonth={this.nextMonth}/>

        <h1>
          <span className='month'>{ long }</span>
          <span className='year'>{ this.state.year }</span>
        </h1>

        <div className='weekdays'>
          {
            ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
              .map((day)=> <span key={day}>{day}</span>)
          }
        </div>

        <Month month={ this.state.month } year={ this.state.year } />

      </div>
    )
  }
}