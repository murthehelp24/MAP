import { LayersControl, Marker, TileLayer } from 'react-leaflet'

function Layers() {
  return (
    <div>
      <LayersControl position="topleft">

        {/* 1 baseMap */}
        <LayersControl.BaseLayer name='OSM' checked>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        {/* 2 baseMap */}
        <LayersControl.BaseLayer name='wordImagery' >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay name='TEST' checked>
          <Marker position={[17.41, 102.78]} ></Marker>
        </LayersControl.Overlay>

      </LayersControl>
    </div>
  )
}

export default Layers