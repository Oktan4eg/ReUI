import React from 'react';

import { NavBarLink } from './menu-item/NavBarLink';
import styled from 'styled-components';

interface NavBarProps {
  // item: Array<T>;
  item: Array<T>;
  // obj?: string[];
}
type T = {
  id: string;
  name: string;
  route: string;
};

const StyledNavBarMenu = styled.nav<NavBarProps>`
  display: flex;
  gap: 48px;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;

export const NavBarMenu2: React.FC<NavBarProps> = ({ item }) => {
  const NavBarMenuItem = item.map((p) => (
    <NavBarLink key={p.name + '-' + p.id} children={p.name} to={p.route} id={p.id} />
  ));
  return (
    <div>
      <StyledNavBarMenu item={item}>{NavBarMenuItem}</StyledNavBarMenu>
    </div>
  );
};
