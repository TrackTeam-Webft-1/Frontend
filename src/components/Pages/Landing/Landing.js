import React from 'react';
import CurrentProjects from './CurrentProjects'

function LandingPage(props) {
  return (
    <div>
      <h1>Welcome to Fund the Future!</h1>
      <div>
        <h2>Check out the new projects:</h2>
      </div>
      <CurrentProjects />
    </div>
  );
}
export default LandingPage;