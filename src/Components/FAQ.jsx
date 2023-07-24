import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

export default function FAQ() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width='100%' maxW='lg' bg='white' rounded='lg'>
          <AccordionItem>
            <AccordionButton
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize='md'>Is the app free to use?</Text>
              <ChevronDownIcon fontSize='24px' />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Yes and delivered as is
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize='md'>What I do if I need help or have questions?</Text>
              <ChevronDownIcon fontSize='24px' />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                You can contact via e-mail personaltravelogue@gmail.com
                or open a issue on github https://github.com/zenWai/RN-MyLittleDiary/issues
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              p={4}
              _hover={{ bg: 'gray.100' }}>
              <Text fontSize='md'>How do I report a bug or issue with the app?</Text>
              <ChevronDownIcon fontSize='24px' />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                You can contact via e-mail personaltravelogue@gmail.com
                or open a issue on github https://github.com/zenWai/RN-MyLittleDiary/issues
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}