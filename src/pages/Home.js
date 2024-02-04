import React from 'react'
import WelcomeMessage from '../components/WelcomeMessage';
import ColumnGrid from '../components/ColumnGrid';
import GridComponent from '../components/GridComponent';

const Home = () => {
  return (
    <div>
        <WelcomeMessage username="Brian Motari"/>
        <GridComponent/>
        <ColumnGrid/>
    </div>
  )
}

export default Home