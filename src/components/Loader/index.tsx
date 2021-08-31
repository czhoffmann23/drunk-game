import { Box, Heading } from '@chakra-ui/react'

const Loader: React.FC = () => {
  return (
    <Box
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100%">
      <object
        type="image/svg+xml"
        data="/drunkapp.svg"
        style={{
          width: 450,
          height: 450,
        }}>
        svg-animation
      </object>
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
