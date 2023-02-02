import React from 'react'

function Layout({children}) {
  return (
    <div className='bg-light h-screen w-full relative'>
        <div className="absolute right-0 top-0">
            <img src="/src/assets/blob.svg" alt="" />
        </div>
        <div className="absolute left-0 bottom-0">
            <img src="/src/assets/blob-2.svg" alt="" />
        </div>
        <div className="w-11/12 sm:w-4/5 mx-auto xl:max-w-7xl py-10">
            {children}
        </div>
    </div>
  )
}

export default Layout