import { Center } from '@chakra-ui/react'


export default function Header() {

    var count = 0

    return (
        <>
            <Center key={++count} mt='100px'>
                This is the Header test text
            </Center>
        </>
    )
}