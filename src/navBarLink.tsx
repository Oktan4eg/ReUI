import React from 'react';
import { Children, MouseEventHandler, ReactNode } from 'react';
// import { Icon } from '../icon';
import { Text, Link } from './lib';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { EducationLogo } from './lib/components/for-education/education-logo';

interface NavBarLinkProps {
  /** Имя линки */
  children?: ReactNode;
  /** адесс роута */
  to: string;
  /** id линки */
  id?: string;
  /**
   * Дополнительный класс
   */
  className?: string;
}

const StyledNavBarLink = styled.li<NavBarLinkProps>`
  .link {
    /* style={{ gap: '48px', display: 'flex' }} */
    text-decoration: none;
    color: ${(props) => props.theme.colors.neutral.default.primary};
    &.active {
      color: ${(props) => props.theme.colors.lead.default.hover};
      cursor: default;
      &:hover {
        /* color: ${(props) => props.theme.colors.lead.default.hover}; */
      }
    }
    &:hover {
      color: ${(props) => props.theme.colors.lead.default.hover};
    }
  }
`;

export const NavBarLink: React.FC<NavBarLinkProps> = ({ className, children, to, id = '1' }) => {
  return (
    <StyledNavBarLink to={to}>
      <NavLink to={to} id={id} className={`${className} link`}>
        <Text as='span' font='body' scale='lg' size='label' weight='medium'>
          {children}
        </Text>
      </NavLink>
    </StyledNavBarLink>
  );
};

// import { FC, ReactNode, RefObject, MouseEventHandler } from 'react';
// import styled from 'styled-components';
// export type ContainerElement = HTMLSpanElement | HTMLAnchorElement;

// type LinkAs = 'a' | 'span' | 'div';

// interface LinkProps {
//   /**
//    * Содержимое ссылки
//    */
//   children?: ReactNode;

//   /**
//    * inline text icon
//    */
//   Icon?: ReactNode;

//   /**
//    * Адрес ссылки
//    */
//   href?: string;

//   /**
//    * Дополнительный класс
//    */
//   className?: string;

//   /**
//    * Убирает underline у ссылки,
//    */
//   pseudo?: boolean;
//   //   underline?: boolean;

//   as?: LinkAs;

//   /**
//    * HTML-атрибут `title` 👀
//    */
//   title?: string;

//   /**
//    * HTML-атрибут `target` 👀
//    */
//   target?: string;

//   /**
//    * HTML-атрибут `rel` 👀
//    */
//   rel?: string;

//   /**
//    * Ссылка на корневой DOM-элемент компонента 👀
//    */
//   innerRef?: RefObject<ContainerElement>;

//   /**
//    * HTML-атрибут `tabIndex`. Определяет последовательность перехода между ссылками при нажатии на кнопку Tab 👀
//    */
//   tabIndex?: number;

//   /** */
//   onClick?: MouseEventHandler<ContainerElement>;
// }

// const StyledTextLink = styled.a<LinkProps>`
//   cursor: pointer;
//   display: inline-flex;
//   color: ${(props) => props.theme.colors.fg.default.primary};
//   text-decoration: underline;
//   /* text-decoration: none; */
//   /* font-size: ${(props) => props.theme.font.size.body}; */
//   &:hover {
//     color: ${(props) => props.theme.colors.lead.default.primary};
//   }
//   &:active {
//     /* margin: 20px; */
//     /* color: ${(props) => props.theme.colors.lead.default.active}; */
//   }

//   ${(props) => props.pseudo && `text-decoration: none;`}
// `;

// export const Link: React.FC<LinkProps> = ({
//   as = 'a',
//   className,
//   children,
//   onClick,
//   Icon,
//   href,
//   pseudo,
//   // ...props // Как подойти к типизации АПИ ??? 🔴
// }) => {
//   return (
//     <StyledTextLink as={as} pseudo={pseudo} href={href} onClick={onClick} className={className}>
//       {children}
//       {Icon && <span className='reui-link-icon'>{Icon}</span>}
//     </StyledTextLink>
//   );
// };
