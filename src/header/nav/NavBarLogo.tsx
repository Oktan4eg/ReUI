import React from 'react';
import { EducationLogo } from '../../lib/components/for-education/education-logo';
// import { NavBarLogoProps, NavBarMenuLogos,  } from './nav-bar-menu';
import { NavBarLink } from './item/NavBarLink';
import styled from 'styled-components';

export interface NavBarLogoProps {
  /** Имя logo */
  // logo?: ReactNode;
}
export const NavBarMenuLogos = [{ id: '1', route: '/', name: 'Education' }];
export const StyledNavBarLogo = styled.nav<NavBarLogoProps>`
  display: inline-flex;
  gap: 48px;
  list-style: none;
`;
export const NavBarLogo: React.FC<NavBarLogoProps> = () => {
  const NavBarMenuItem = NavBarMenuLogos.map((route) => (
    <NavBarLink key={route.id} to={route.route}>
      <EducationLogo children={route.name} id={route.id} />
    </NavBarLink>
  ));
  return <StyledNavBarLogo>{NavBarMenuItem}</StyledNavBarLogo>;
};
