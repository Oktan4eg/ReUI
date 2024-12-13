import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo';
import { NavBarLink } from './navBarLink';

interface NavBarProps {
  /** Имя линки */
  logo?: ReactNode;
}

const StyledNavBar = styled.nav<NavBarProps>`
  display: flex;
  padding: 24px;
  gap: 96px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;
`;

export const NavBar: React.FC<NavBarProps> = ({ logo = 'name' }) => {
  return (
    <StyledNavBar>
      <NavLink to={'/'}>
        <EducationLogo />
      </NavLink>
      <NavBarLink name={'Программы'} to={'programms'} />
      <NavBarLink name={'Франшиза'} to={'franchise'} />
      <NavBarLink name={'Вопросы и ответы'} to={'faq'} />
      <NavBarLink name={'Контакты'} to={'contacts'} />
      <NavBarLink name={'Мои курсы'} to={'courses'} />
    </StyledNavBar>
  );
};

// {/* <Link>{label}</Link> */}
// {/* <NavLink to={"/"+to} id={id}>
//   <EducationLogo color='white' />
// </NavLink> */}
