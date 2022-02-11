import { Center } from '@chakra-ui/react'


export default function Footer() {

    var count = 0

    return (
        <>
            <Center key={++count}>
                Footer test text
            </Center>
        </>
    )
}