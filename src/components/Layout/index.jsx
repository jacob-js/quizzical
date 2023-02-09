import React from 'react';

function Layout({children}) {
  return (
    <div className='bg-light min-h-screen w-full inset-0 fixed font-karla overflow-auto'>
        <div className="fixed right-0 top-0 z-0">
            <img src="/vectors/blob.svg" alt="" />
        </div>
        <div className="fixed left-0 bottom-0">
            <img src="/vectors/blob-2.svg" alt="" />
        </div>
        <div className="w-11/12 sm:w-4/5 mx-auto h-full xl:max-w-7xl relative py-20 z-20">
            {children}
        </div>
    </div>
  )
}

export default Layout