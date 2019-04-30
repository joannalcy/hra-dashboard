import React from 'react';
import './style.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer fixed-bottom">
          <h5 className='footer-text'>
            <a href="http://data.naturalcapitalproject.org/nightly-build/invest-users-guide/html/habitat_risk_assessment.html"
            target="blank">InVEST User Guide </a>
            &copy;
            <a href="https://naturalcapitalproject.stanford.edu/" target="blank">2019 Natural Capital Project</a>
          </h5>
      </div>
    );
  }
}

export default Footer;
