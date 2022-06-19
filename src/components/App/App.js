import React from 'react';
import './style/App.scss';
import EstimateCard from '../EstimateCard/EstimateCard';

const App = () => {
  return (
    <div>
      <div className='cards'>
        <EstimateCard />
        <EstimateCard />
        <EstimateCard />
      </div>
      <div className='result'></div>
    </div>
  )
}

export default App