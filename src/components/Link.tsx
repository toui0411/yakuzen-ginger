import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

const CustomLink: React.FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href!}>
      <Link {...props} onClick={() => (document.activeElement as HTMLElement).blur()} />
    </NextLink>
  );
};


export default CustomLink;
