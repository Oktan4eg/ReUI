import React from 'react';
import { ReactNode } from 'react';
// import { Icon } from '../icon';
import styled from 'styled-components';

import { NavBarLogo } from './nav/menu-item/NavBarLogo';
import { NavBarMenu2 } from '././nav/NavBarMenu2';
import { NavBarMenu } from '././nav/NavBarMenu';

interface HeaderProps {
  /** Имя logo */
  items?: {};
  // route: string;
  // name: string;
  // item: string;
}
const NavBarMenuItems = [
  { id: '1', route: '/programms', name: 'Программы' },
  { id: '2', route: '/franchise', name: 'Франшиза' },
  { id: '3', route: '/faq', name: 'Вопросы и ответы' },
  { id: '4', route: '/contacts', name: 'Контакты' },
  { id: '5', route: '/courses', name: 'Мои курсы' },
];
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
      {/* <NavBarMenu2 map={NavBarMenuItems} id={'2'} name={'2'} route={'2'} /> */}
      <NavBarMenu />
    </StyledHeader>
  );
};
