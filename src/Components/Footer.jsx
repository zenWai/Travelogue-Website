import { Box, Container, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import AppStoreBadge from './AppStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      width='100%'
      py={10}
      borderTopWidth='1px'
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container as={Stack} maxW={'6xl'} maxh={'sm'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/'}>About Us</Link>
            <Link href={'/support/'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'/FAQ/'}>FAQ</Link>
            <Link href={'/support/'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            {/*<Link href={'#'}>Cookies Policy</Link>*/}
            <Link href={'/privacy-policy/'}>Privacy Policy</Link>
            <Link href={'/TOS/'}>Terms of Service</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge url='https://example.com' store='appstore' />
            <AppStoreBadge url='https://example.com' store='googleplay' />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}