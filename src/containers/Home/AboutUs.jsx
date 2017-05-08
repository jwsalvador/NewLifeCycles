import React from 'react';

import Header from 'components/Header';
import { section, aboutUs } from 'assets/css/modules/home.css';

const AboutUs = () => (
  <div id="aboutus-section" className={[section, aboutUs].join(' ')}>
    <Header as="section">A Few Words About Us</Header>
    <p>
        We are bike enthusiasts who are passionate
        about all things related to bicycles.
        Our in-house mechanics have years of experience in
        repairing, restoring and maintaining bikes.
      </p>
    <p>
        We cater to all types of bikes--BMX, MTB,
        ROAD bikes, vintage, etc. You name it, we can
        fix it for you.
      </p>
    <p>
        So if you are located in the Western Suburbs of
        Melbourne, head on over to our shop and give your
        bicycle the new life that it needs.
      </p>
  </div>
  );

export default AboutUs;
