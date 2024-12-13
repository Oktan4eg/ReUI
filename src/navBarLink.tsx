import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo';

interface NavBarLinkProps {
  /** Имя линки */
  name: string;
  /** адесс роута */
  to: string;
  /** id линки */
  id?: string;
}

const StyledNavBarLink = styled.nav<NavBarLinkProps>`
  display: flex;
  padding: 24px;
  gap: 96px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;
`;

export const NavBarLink: React.FC<NavBarLinkProps> = ({ name = 'name', to, id = '1' }) => {
  return (
    <StyledNavBarLink name={name} to={to}>
      <NavLink to={'/' + to} id={id}>
        <Link as='div'>{name}</Link>
      </NavLink>
    </StyledNavBarLink>
  );
};

// {/* <Link>{label}</Link> */}
// {/* <NavLink to={"/"+to} id={id}>
//   <EducationLogo color='white' />
// </NavLink> */}
