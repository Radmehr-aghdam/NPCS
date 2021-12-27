import { Text } from '@chakra-ui/react'


export default function Header (){

    var count = 0

    return (
        <>
            <Text key={++count}>
                this is the Header test text
            </Text>
        </>
    )
}