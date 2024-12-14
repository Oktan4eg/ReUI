import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavBarLink } from './navBarLink';
import { NavBarLogo } from './NavBarLogo';
import { NavBarMenu } from './NavBarMenu';

interface HeaderProps {
  /** Имя logo */
  logo?: ReactNode;
}

const StyledHeader = styled.div<HeaderProps>`
  display: inline-flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
`;

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <NavBarLogo />
      <NavBarMenu />
    </StyledHeader>
  );
};
