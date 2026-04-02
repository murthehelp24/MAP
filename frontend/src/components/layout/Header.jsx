import React from 'react'

function Header(props) {
  const { adding, setAdding } = props
  // console.log(adding)
  return (
    <div className='p-4  shadow-md border border-gray-600'>

      <div className='flex justify-between'>
        <h2>ระบบจัดการเวรประจำจุด</h2>
        <button className="btn btn-outline"
          onClick={() => setAdding((perv) => !perv)}
        >
          {
            adding
              ? (<>❌ ยกเลิก</>)
              : (<>✔️ เพิ่มจุดเข้าเวร</>)
          }
        </button>
      </div>
        {
          adding &&
          <div className='mt-2 text-sm text-amber-400 bg-amber-100 p-2 rounded-2xl border'>คลิกบนแผนที่เพื่อเพิ่มจุดเข้าเวร</div>
        }


    </div>
  )
}

export default Header