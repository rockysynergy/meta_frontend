import React from 'react';
import CallToAction from './home_page_components/CallToAction';
import Specials from './home_page_components/Specials';
import CustomersSay from './home_page_components/CustomersSay';
import Chicago from './home_page_components/Chicago';

function HomePage() {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default HomePage;
