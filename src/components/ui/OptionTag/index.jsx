import React from 'react'

function OptionTag({children, block, selected, submitted, isInvalid, isValid, ...props}) {
  return (
    <div className={`text-primary-900 font-semibold font-karla cursor-pointer text-sm px-6 py-3 border rounded-xl transition-all duration-500 ${block ? 'w-full ': 'w-max ' + (selected && !submitted ? ' bg-light-blue': (isInvalid && submitted && selected) ? 'bg-red-400 opacity-80': (isValid && submitted && selected) ? 'bg-success': 'border-primary-900')}`} {...props}>{children}</div>
  )
}

export default OptionTag