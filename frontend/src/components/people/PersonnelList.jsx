import React from 'react'
import useDutyStore from '../../store/useDutyStore'

function PersonnelList() {
  const personnel = useDutyStore(state => state.personnel)
  // console.log(personnel)
  return (
    <div className='w-80  overflow-y-auto'>
      <div>
        <div className='flex flex-col items-center m-2'>
          <h1 className='font-bold'>🫅 รายชื่อเจ้าหน้าที่ </h1>
        </div>
        <p className='text-sm text-gray-500 ml-2 mb-2'>ลากไปยังจุด</p>
      </div>
      <hr className='border-gray-500' />

      {
        personnel.map((item) => (
          <div key={item.id} className='flex justify-between items-center gap-2 p-3 border border-gray-500 mt-2 rounded-xl m-2 cursor-move hover:shadow-md hover:scale-105'>
            <div className='text-2xl'>{item.avatar}
            </div>
            <div>
              <span className='text-sm'>{item.name}</span>
              <p className='text-sm text-gray-500'>{item.position}</p>
            </div>
            <div >🕛
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default PersonnelList