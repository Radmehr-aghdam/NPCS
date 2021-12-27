import { Text } from '@chakra-ui/react'

export default function Home() {

  var count = 0

  return (
    <>
      <Text key={++count}>
        test text to index page
      </Text>
    </>
  )
}
