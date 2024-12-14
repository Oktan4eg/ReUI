import React from 'react';
import { ReactNode } from 'react';
// import { Icon } from '../icon';
import styled from 'styled-components';

import { NavBarLogo } from './nav/menu-item/NavBarLogo';
import { NavBarMenu } from '././nav/NavBarMenu';

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
