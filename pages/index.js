import { Center } from '@chakra-ui/react'

export default function Home() {

  var count = 0

  return (
    <>
      <Center key={++count}>
        Test text to index page
      </Center>
    </>
  )
}
