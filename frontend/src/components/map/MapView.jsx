import { MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Layers from './Layers'

const center = [17.41, 102.78]

function MapView() {
  return (
    <div className='w-full'>
      <MapContainer
        className='h-[500px] w-full'
        center={center}
        zoom={13}
      >
        <Layers />

      </MapContainer>
    </div>
  )
}

export default MapView