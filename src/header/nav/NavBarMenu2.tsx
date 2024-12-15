import React from 'react';

import { NavBarLink } from './menu-item/NavBarLink';
import styled from 'styled-components';

type MenuTypes = {
  obj: object;
};
const StyledNavBarMenu = styled.span<MenuTypes>`
  display: flex;
  gap: 48px;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;

// const NamePagesBar: React.FC<PropTypes> = ({title, goBackText = ''}) => (<...>);
export const NavBarMenu2: React.FC<MenuTypes> = ({ obj, ...props }) => {
  const NavBarMenuItem = obj.map((p) => <NavBarLink key={p.id} children={p.name} to={p.route} id={p.id} />);
  console.log(obj);
  return <StyledNavBarMenu>{NavBarMenuItem}</StyledNavBarMenu>;
};

// export const NavBarMenu2 = (props: Array<T>) => {
// const result = Array.isArray(obj) ? obj.map((element) => element + 1) : [];
// console.log(result); // 👉️ []
// export const NavBarMenu2 = (props: Array<T>) => {
