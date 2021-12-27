import { Text } from '@chakra-ui/react'


export default function Footer (){

    var count = 0

    return (
        <>
            <Text key={++count}>
                Footer test text
            </Text>
        </>
    )
}