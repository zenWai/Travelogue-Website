import React from 'react';
import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { FiHome, FiInfo, FiMenu, FiPhoneCall } from 'react-icons/fi';
import logo from '../assets/icon.png';

const LinkItems = [
  { name: 'Home', route: '/', icon: FiHome },
  { name: 'Faq', route: '/FAQ/', icon: FiInfo },
  { name: 'Support', route: '/support/', icon: FiPhoneCall },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        bg={'white'}
      >
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' flexDirection='column' alignItems='center' mx='8' mb={105} mt={2} justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold' mb={5}>
          Travelogue App
        </Text>
        <Image
          borderRadius='full'
          boxSize='75px'
          src={logo}
          alt='Logo'
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} route={link.route} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, route, children, ...rest }) => {
  return (
    <Link href={route} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'blue.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
      </Text>


    </Flex>
  );
};