import React from 'react'

function OptionTag({children, block, selected, isInvalid, isValid}) {
  return (
    <div className={`text-primary-900 font-semibold font-karla cursor-pointer text-sm px-6 py-3 border-primary-900 rounded-xl mt-5 transition-all ${block ? 'w-full ': 'w-max ' + (selected ? ' bg-light-blue': isInvalid ? 'bg-red-400 opacity-80': isValid ? 'bg-success': ' border')}`}>{children}</div>
  )
}

export default OptionTag