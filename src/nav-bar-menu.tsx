import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo';
import { NavBarLink } from './navBarLink';

interface NavBarProps {
  /** Имя logo */
  logo?: ReactNode;
}
interface HeaderProps {
  /** Имя logo */
  logo?: ReactNode;
}
interface NavBarLogoProps {
  /** Имя logo */
  logo?: ReactNode;
}

const StyledNavBarMenu = styled.nav<NavBarProps>`
  display: flex;
  gap: 48px;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;
const StyledNavBarLogo = styled.nav<NavBarProps>`
  display: inline-flex;
  gap: 48px;
  list-style: none;
`;
const StyledHeader = styled.div<NavBarProps>`
  display: inline-flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
`;

const NavBarMenuLogos = [{ id: '1', route: '/', name: 'Education' }];

const NavBarMenuItems = [
  { id: '1', route: '/programms', name: 'Программы' },
  { id: '2', route: '/franchise', name: 'Франшиза' },
  { id: '3', route: '/faq', name: 'Вопросы и ответы' },
  { id: '4', route: '/contacts', name: 'Контакты' },
  { id: '5', route: '/courses', name: 'Мои курсы' },
];

export const NavBarMenu: React.FC<NavBarProps> = () => {
  const NavBarMenuItem = NavBarMenuItems.map((route) => (
    <NavBarLink key={route.id} children={route.name} to={route.route} id={route.id} />
  ));
  return <StyledNavBarMenu>{NavBarMenuItem}</StyledNavBarMenu>;
};

export const NavBarLogo: React.FC<NavBarLogoProps> = () => {
  const NavBarMenuItem = NavBarMenuLogos.map((route) => (
    <NavBarLink key={route.id} to={route.route}>
      <EducationLogo children={route.name} id={route.id} />
    </NavBarLink>
  ));
  return <StyledNavBarLogo>{NavBarMenuItem}</StyledNavBarLogo>;
};

export const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <NavBarLogo />
      <NavBarMenu />
    </StyledHeader>
  );
};
