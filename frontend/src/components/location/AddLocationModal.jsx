import React, { useState } from 'react'
import useDutyStore from '../../store/useDutyStore'

export default function AddLocationModal(props) {
  const { lat, lng, setAdding, setPending } = props
  const addLocation = useDutyStore(state => state.addLocation)

  const [name, setName] = useState("")

  const hdlAddLocation = async () => {
    await addLocation(lat, lng, name)
    setAdding(false)
    setPending(null)
  }

  const hdlCancel = () => {
    setAdding(false)
    setPending(null)
  }

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-1000 '>
      <div className='bg-base-300 p-6 rounded-2xl shadow-2xl w-80'>
        <h3 className='text-xl mb-2'>เพิ่มจุดเข้าเวรใหม่</h3>
        <div className='text-sm text-gray-400'>lat: {lat.toFixed(4)}, lng: {lng.toFixed(4)}</div>

        <input type="text" placeholder="Input Name" className="input mt-2"
        value={name}
        onChange={(e)=> setName(e.target.value)}/>

        <div className='flex justify-center gap-4 mt-3'>
          <button onClick={hdlAddLocation} disabled={!name.trim()} className="btn btn-neutral-200 btn-outline flex-1">Save</button>
          <button onClick={hdlCancel} className="btn btn-neutral-200 btn-outline flex-1">Cancel</button>
        </div>
      </div>
    </div>
  )
}
