import React from 'react'
import { Spinner, Flex } from '@chakra-ui/core'

export const LoadingComponent = () => (
  <Flex justifyContent="center" alignItems="center" height="100%">
    <Spinner
      color="whatsapp.500"
      emptyColor="whiteAlpha.500"
      size="xl"
      thickness="3px"
    />
  </Flex>
)

