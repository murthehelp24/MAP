import { MapContainer, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Layers from './Layers'

const ClickToAdd = (props) => {
  const { adding, onPick } = props

  useMapEvent({
    click(e) {
      // console.log(e.latlng)
      // map.flyTo(e.latlng, 15)
      if (adding) onPick(e.latlng.lat, e.latlng.lng)
    },
  })
  return
}

function MapView(props) {
  const center = [17.41, 102.78]
  const { adding, onPick } = props
  // console.log(adding)
  return (
    <div className='w-full'>
      <MapContainer
        className='h-[500px] w-full'
        center={center}
        zoom={13}
      >
        <Layers />

        <ClickToAdd adding={adding} onPick={onPick} />

      </MapContainer>
    </div>
  )
}

export default MapView