import useDutyStore from '../../store/useDutyStore'

function Location() {
  const location = useDutyStore((state) => state.location)

  // console.log(location)
  return (
    <div className='w-80  border-l border-gray-600 shadow-lg'>

      <div>
        <div className='flex gap-2 m-2'>
          📌
          <h2 className='text-xl'>เพิ่มจุดเข้าเวร</h2>
        </div>
        <hr className='border-gray-500' />
      </div>

      <div className='p-4'>
        {
          location.map((item) => (
            <div key={item.id} className='border-2 border-dashed border-gray-200 rounded-md bg-gray-400 p-2 mb-2' >
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-xs text-gray-600'>.../ {item.maxCapacity}</p>
                </div>
                <button type='button' className='cursor-pointer hover:bg-red-400 rounded-3xl w-10 text-sm'>🗑️</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Location