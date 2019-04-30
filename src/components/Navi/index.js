import React from 'react';
import './style.css';

class Navi extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div className="navbar">
        <h1 className="navbar-brand">{title}</h1>
      </div>
    );
  }
}
export default Navi;
