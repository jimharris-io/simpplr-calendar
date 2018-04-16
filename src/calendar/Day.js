import React from 'react';

export default class Day extends React.Component {

  render() {

    const { date, isOverflow } = this.props;

    return (
      <div className={`day ${isOverflow ? 'overflow': ''}`}>
        <span className='number'>{ date.toLocaleString('en-gb', { day: "2-digit" } ) }</span>
      </div>
    )
  }

}