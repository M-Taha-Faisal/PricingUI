import {Box,Flex,Heading,Text,Button,Center, Icon, HStack, Stack} from '@chakra-ui/react'
import  {CheckIcon}  from '../icons/Icon'
import { StackProps } from '@chakra-ui/react'
export  function Listing(props:StackProps){
    const {children,...rest}=props
    return(
    <HStack as='li' spacing={5} {...rest}>
        <Icon as={CheckIcon} w={[3,3,3]} h={[3,3,3]}/>
        <Text textAlign={['left','left','center']}>{children}</Text>
    </HStack>
    )

}


  
export default function Pricing(){
    return (
        <Box mx={6}>
        <Box maxW={'994px'} m='auto' mt='-200px' bg={'#FFFFFF'} borderRadius='12px' overflow='hidden' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' textAlign={'center'}>
            <Flex direction={['column','column','row']}>
                <Box bg='#E5E5E5' p='25px'>
                    <Center>
                    <Text fontWeight={'800'} fontSize={"24px"} >Premium Pro</Text>
                    </Center>
                    <Center>
                    <Heading fontWeight={'800'} fontSize={'60px'} >$329</Heading></Center>
                    <Center>
                    <Text fontWeight={500} fontSize={'18px'} mt='5px'>billed just once</Text>
                    </Center>
                    <Button size={'lg'} colorScheme={'purple'} mt='24px' w='282px'>Get Started</Button>
                </Box>
                <Box p={'25px'} fontSize={['13px','13px','18px']} >
                    <Text textAlign={'left'}>
                    Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as='ul' spacing={'20px'} pt='20px'>
                    <Listing as='span'>International calling and messaging API</Listing>
                    <Listing>Additional phone numbers</Listing>
                    <Listing>Automated messages via Zapier</Listing>
                    <Listing>24/7 support and consulting</Listing>
                    </Stack>
                </Box>
            </Flex>
        </Box>
        </Box>
    )
}