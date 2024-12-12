import { ReactNode, RefObject, MouseEventHandler } from 'react';
import styled from 'styled-components';
export type ContainerElement = HTMLSpanElement | HTMLAnchorElement;

type LinkAs = 'a' | 'span' | 'div';

interface LinkProps {
  /**
   * Содержимое ссылки
   */
  children?: ReactNode;

  /**
   * inline text icon
   */
  Icon?: ReactNode;

  /**
   * Адрес ссылки
   */
  href?: string;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Убирает underline у ссылки,
   */
  pseudo?: boolean;
  //   underline?: boolean;

  as?: LinkAs;

  /**
   * HTML-атрибут `title` 👀
   */
  title?: string;

  /**
   * HTML-атрибут `target` 👀
   */
  target?: string;

  /**
   * HTML-атрибут `rel` 👀
   */
  rel?: string;

  /**
   * Ссылка на корневой DOM-элемент компонента 👀
   */
  innerRef?: RefObject<ContainerElement>;

  /**
   * HTML-атрибут `tabIndex`. Определяет последовательность перехода между ссылками при нажатии на кнопку Tab 👀
   */
  tabIndex?: number;

  /** */
  onClick?: MouseEventHandler<ContainerElement>;
}

const StyledTextLink = styled.a<LinkProps>`
  cursor: pointer;
  display: inline-flex;
  color: ${(props) => props.theme.colors.fg.default.primary};
  text-decoration: underline;
  font-size: ${(props) => props.theme.font.size.body};
  &:hover {
    color: ${(props) => props.theme.colors.success.default.primary};
    .reui-textLink-icon {
      &:hover {
        color: ${(props) => props.theme.colors.success.default.primary};
      }
    }
  }

  ${(props) => props.pseudo && `text-decoration: none;`}
`;

export const Link: React.FC<LinkProps> = ({
  as = 'a',
  className,
  children,
  onClick,
  Icon,
  href,
  pseudo,
  // ...props // Как подойти к типизации АПИ ??? 🔴
}) => {
  return (
    <StyledTextLink as={as} pseudo={pseudo} href={href} onClick={onClick} className={className}>
      {children}
      {Icon && <span className='reui-link-icon'>{Icon}</span>}
    </StyledTextLink>
  );
};
