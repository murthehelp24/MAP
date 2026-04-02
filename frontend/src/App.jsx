import React, { useEffect, useState } from 'react'
import PersonnelList from './components/people/PersonnelList'
import Header from './components/layout/Header'
import MapView from './components/map/MapView'
import Location from './components/location/Location'
import useDutyStore from './store/useDutyStore'
import AddLocationModal from './components/location/AddLocationModal'

function App() {
  const [adding, setAdding] = useState(false)
  const [pending, setPending] = useState(null)
  const fetchAll = useDutyStore(state => state.fetchAll)

  useEffect(() => {
    fetchAll()
  }, [])

  const onPick = (lat, lng) => {
    setPending({
      lat: lat,
      lng : lng
    })
  }
  return (
    <>
      <div className='flex h-screen'>
        <PersonnelList />
        <div className='flex flex-col flex-1'>
          <Header adding={adding} setAdding={setAdding} />
          <div className='flex flex-1 justify-between overflow-hidden border border-gray-600'>
            <MapView adding={adding} onPick={onPick}/>
            <Location />
          </div>
        </div>
        {
          pending && <AddLocationModal
          lat={pending.lat}
          lng={pending.lng}
          setAdding={setAdding}
          setPending={setPending}
          />
        }
      </div>
    </>
  )
}

export default App