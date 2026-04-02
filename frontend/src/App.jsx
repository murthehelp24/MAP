import React, { useEffect, useState } from 'react'
import PersonnelList from './components/people/PersonnelList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import Location from './components/location/Location'
import useDutyStore from './store/useDutyStore'

function App() {
  const fetchAll = useDutyStore(state => state.fetchAll)

  useEffect(() => {
    fetchAll()
  }, [])

  // console.log(fetchAll)

  return (
    <>
      <div className='flex h-screen'>
        <PersonnelList />
        <div className='flex flex-col flex-1'>
          <Header />
          <div className='flex flex-1 justify-between overflow-hidden border border-gray-600'>
            <MapView />
            <Location />
          </div>
        </div>
      </div>
    </>
  )
}

export default App