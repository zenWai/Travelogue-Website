import React from 'react';
import {
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiAwesomelists, SiProbot } from 'react-icons/si';
import { FcStackOfPhotos } from 'react-icons/fc';

import hero from './assets/snapshot1.jpg';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
const Home = () => {
  return (
    <Container maxW={'5xl'} py={12} bg={'white'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            TravelogueLens Travel Diary
          </Text>
          <Heading>Travel. Experience.
            Record. Simplified.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Your Travel,
            Your Story: Sort and Showcase
            Your Gallery of Photos by City or Country.

            Ready to Start Your Personal Travelogue?
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={SiProbot} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Get More from Your Travels and Discover the Interesting'}
            />
            <Feature
              icon={<Icon as={SiAwesomelists} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Showcase travels with ease'}
            />
            <Feature
              icon={
                <Icon as={FcStackOfPhotos} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Your Story: Sort and Showcase'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={hero}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};


export default Home;
