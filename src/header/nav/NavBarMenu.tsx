import React from 'react';

// import { NavBarLogoProps, NavBarMenuLogos,  } from './nav-bar-menu';
import { NavBarLink } from './menu-item/NavBarLink';
import styled from 'styled-components';

// export const NavBarMenu: React.FC<NavBarProps> = ({ id, route, name, item }) => {
//   const NavBarMenuItem = () => <NavBarLink key={id} children={name} to={route} id={id} />;
//   return <StyledNavBarMenu>{NavBarMenuItem}</StyledNavBarMenu>;
// };
// import React from 'react';

// // import { NavBarLogoProps, NavBarMenuLogos,  } from './nav-bar-menu';
// import { NavBarLink } from './menu-item/NavBarLink';
// import styled from 'styled-components';

interface NavBarProps {
  /** Имя logo */
  // id?: string;
  // route?: string;
  // name?: string;
}
const StyledNavBarMenu = styled.nav<NavBarProps>`
  display: flex;
  gap: 48px;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;
const NavBarMenuItems = [
  { id: '1', route: '/programms', name: 'Программы' },
  { id: '2', route: '/franchise', name: 'Франшиза' },
  { id: '3', route: '/faq', name: 'Вопросы и ответы' },
  { id: '4', route: '/contacts', name: 'Контакты' },
  { id: '5', route: '/courses', name: 'Мои курсы' },
];

export const NavBarMenu: React.FC<NavBarProps> = (props) => {
  const NavBarMenuItem = NavBarMenuItems.map((route) => (
    <NavBarLink key={route.id} children={route.name} to={route.route} id={route.id} />
  ));
  return <StyledNavBarMenu>{NavBarMenuItem}</StyledNavBarMenu>;
};
