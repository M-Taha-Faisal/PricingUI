 import React, { ElementType } from 'react'
 import { HStack,Text,Icon,StackProps, Box ,Stack} from '@chakra-ui/react'
import { MoneyBackGuaranteeIcon,HassleFreeIcon,MonthlySubscriptionIcon} from '../icons/Icon'
 interface FeatureProps extends StackProps
{
    icon:ElementType
} export function Feature(props:FeatureProps) {
    const {icon,children,...rest}=props
   return (
     <HStack {...rest} spacing='24px' >
        <Icon as={icon} boxSize='40px'/>
        <Text fontSize={'18px'} fontWeight='800px' textAlign={'left'}>{children}</Text>
     </HStack>
    
   )
 }

 export default function Features(){
    return(
        <Box maxW="1024px" m='auto' mt='30px' pb='32px'>
        <Stack direction={['column','column','row']} textAlign={['left','left','center']} alignItems={['left','left','center']} px='48px'spacing='20px'>
    <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
    <Feature icon={HassleFreeIcon}>No setup fees
100% hassle-free</Feature>
    <Feature icon={MonthlySubscriptionIcon}>No monthly subscription
Pay once and for all</Feature>
    </Stack>
    </Box>
    )
 }
 