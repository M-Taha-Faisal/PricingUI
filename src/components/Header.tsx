import React from 'react'
import {Box,Heading,Text,Center} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box pb='112px'>
        <Box as="section" bg={"#6B46C1"} color={" #F7FAFC"} pt={'80px'} pb={'110px'} px={'32px'} textAlign={['left','left','center']}>
          <Center>
         <Heading fontWeight={"800"} fontSize={['3xl','3xl','5xl']} >Simple pricing for your business</Heading>
         </Center> 
         <Center>
         <Text fontWeight={'500'} fontSize={['lg','lg','2xl']} pt={'16px'}>Plans that are carefully crafted to suit your business.</Text>
         </Center>
        </Box>
        </Box>
  )
}
