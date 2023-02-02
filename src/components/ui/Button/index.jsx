import React from 'react'
import { Button as ChakBtn, theme } from '@chakra-ui/react'

function Button({children, ...props}) {
  return (
    <ChakBtn bg="primary.800" paddingX="60px" fontFamily="Karla" fontWeight="medium" fontSize="unset" paddingY="16px" color="white" borderRadius={15} height="14" lineHeight={21} _hover={{
        bg: theme.colors.facebook[600]
    }} {...props}>{children}</ChakBtn>
  )
}

export default Button