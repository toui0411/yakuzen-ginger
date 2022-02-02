import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

export const CustomLink: React.FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href!}>
      <Link _focus={{boxShadow: 'none', textDecoration:'none'}} _hover={{boxShadow: 'none', textDecoration:'none'}} {...props} onClick={() => (document.activeElement as HTMLElement).blur()} />
    </NextLink>
  );
};