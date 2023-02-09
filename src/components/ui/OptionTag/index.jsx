import React from 'react'

function OptionTag({children, block, selected, isInvalid, isValid, ...props}) {
  return (
    <div className={`text-primary-900 font-semibold font-karla cursor-pointer text-sm px-6 py-3 border rounded-xl transition-all duration-500 ${block ? 'w-full ': 'w-max ' + (selected ? ' bg-light-blue': isInvalid ? 'bg-red-400 opacity-80': isValid ? 'bg-success': 'border-primary-900')}`} {...props}>{children}</div>
  )
}

export default OptionTag