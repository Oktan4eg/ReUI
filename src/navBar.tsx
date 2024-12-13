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

const StyledNavBar = styled.nav<NavBarProps>`
  display: flex;

  gap: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar: React.FC<NavBarProps> = ({ logo = 'name' }) => {
  return (
    <StyledNavBar>
      <NavBarLink to={'/'}>
        {/* <a href='/'> */}
        <EducationLogo />
        {/* </a> */}
      </NavBarLink>

      <ul style={{ gap: '48px', display: 'flex' }}>
        <NavBarLink children={'Программы'} to={'/programms'} />
        <NavBarLink children={'Франшиза'} to={'/franchise'} />
        <NavBarLink children={'Вопросы и ответы'} to={'/faq'} />
        <NavBarLink children={'Контакты'} to={'/contacts'} />
        <NavBarLink children={'Мои курсы'} to={'/courses'} />
      </ul>
    </StyledNavBar>
  );
};

// {/* <Link>{label}</Link> */}
// {/* <NavLink to={"/"+to} id={id}>
//   <EducationLogo color='white' />
// </NavLink> */}
