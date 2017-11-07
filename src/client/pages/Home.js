import React from 'react';

const Home = () => {
  return (
    <div className="testing">
      <div>
        Hello
      </div>
      <button onClick={() => console.log('hi there2')}>Press Me 1</button>
    </div>
  )
};

export default {
  component : Home
};
