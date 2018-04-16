import React from 'react';

export default class Select extends React.Component {

  render() {

    const { contents, onChange, value } = this.props;

    return (
      <select onChange={onChange} value={value}>
        {
          contents.map((m, i)=> <option key={m.label} value={m.value}>{m.label}</option>)
        }
      </select>
    )
  }

}