function OptionTag({children, block, selected, submitted, isInvalid, isValid, ...props}) {
  return (
    <div className={`text-primary-900 font-semibold font-karla text-sm px-6 py-3 border rounded-xl transition-all duration-500 ${block ? 'w-full ': 'w-max ' + (selected && !submitted ? ' bg-light-blue': (isInvalid && submitted && selected) ? 'bg-red-400 opacity-80': (isValid && submitted) ? 'bg-success': 'border-primary-900')} ${selected && submitted ? 'ring-2': ''} ${submitted ? 'opacity-70 cursor-not-allowed': 'cursor-pointer'}`} {...props} dangerouslySetInnerHTML={{
      __html: children
    }} onClick={!submitted && props.onClick}></div>
  )
}

export default OptionTag