import * as React from "react"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
import { NavbarLinkProps, NavbarLink } from "./navbar-link"
import { ThemeColors } from "../theme";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import LogoImg from '../images/logo.png';

export type NavbarProps = {

}

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    { label: 'About', href: '/', },
    { label: 'Roles', href: '/roles', },
    { label: 'Speaking', href: '/speaking', },
    { label: 'Publications', href: '/publications', },
    // { label: 'Contact', href: '/contact', },
  ];

export const Navbar: React.FC<NavbarProps> = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
        <Box paddingTop={{
          "base": '72px',
          "md": '104px',
          "lg": '100px',
        }}></Box>
        <Box 
            as='nav'
            pos='fixed'
            top='0'
            left='0'
            width='100%'
            zIndex='100'
            alignItems='center'
        >
            <Flex 
                width='100%'
                height='100%'
                alignItems='center'
                pos='relative'
                background='#fff'
            >
               
                <Box
                    flexGrow={1}
                    alignContent='center'
                    padding={{ 
                      base: '0 1rem',
                      md: '0 2.5rem',
                  }}
                >
                    <Image
                      src={LogoImg}
                      alt='Logo'
                      height={{
                        base: '45px',
                      }}
                    />
                </Box>
                <Flex 
                    justifySelf='flex-end'
                    padding={{ 
                        base: '1rem',
                        md: '2.5rem 2.5rem',
                    }}
                >
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                 <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                  >
                        <IconButton
                            onClick={onToggle}
                            background='transparent'
                            backgroundColor='transparent'
                            _hover={{ background: 'transparent', color: ThemeColors.yellow }}
                            color={ThemeColors.brunswick}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            aria-label={'Toggle Navigation'}
                        />
                </Flex>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
        </>
    )
}

const DesktopNav = () => {
    const linkColor = ThemeColors.brunswick;
    const linkHoverColor = ThemeColors.yellow;
    const popoverContentBgColor = '#fff';
    
    return (
        <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize='1rem'
                  fontWeight={800}
                  color={linkColor}
                  letterSpacing='2px'
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#fff', '#000') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#fff' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
        >
                <Icon color={'#fff'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={ThemeColors.pine}
        display={{ md: 'none' }}
    >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack 
        onClick={children && onToggle}
        color={'#fff'}
        _hover={{
            background: '#fff',
            color: ThemeColors.yellow,
        }}
      >
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          justifyContent='center'
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
        >
            {label}
          </Text>
          {children && (
            <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };