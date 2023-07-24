import { Box, Flex, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FcAddRow, FcAssistant } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Support() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Support by email'}
          text={
            'You can contact via e-mail personaltravelogue@gmail.com'
          }
        />
        <Feature
          icon={<Icon as={FcAddRow} w={10} h={10} />}
          title={'Via issues Github'}
          text={
            'open a issue on github https://github.com/zenWai/RN-MyLittleDiary/issues'
          }
        />
      </SimpleGrid>
    </Box>
  );
}