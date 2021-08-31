import { Box, Heading } from '@chakra-ui/react'
import { Beers as BeersIcon } from 'assets/svg'

const Loader: React.FC = () => {
  return (
    <Box
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100%">
      <BeersIcon w="220px" h="220px" />
      <Heading
        as="h1"
        mt="15px"
        textTransform="uppercase"
        fontSize="25px"
        color="white">
        DRUNK APP
      </Heading>
    </Box>
  )
}

export default Loader
