import styled, { CSSProperties } from 'styled-components';
import { FC, ReactNode, Fragment } from 'react';

type TextTags = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Нужны ли вообще H2-6?
type TextSizes = 'display' | 'heading' | 'title' | 'label' | 'body' | 'ligal' | 'button';
type TextScale = 'xl' | 'lg' | 'md' | 'sm';
type TextWeight = 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold' | 'black';
type TextFont = 'display' | 'body' | 'monospace';
type TextAlign = 'left' | 'right' | 'center' | 'justify';

export interface TextProps {
  /** Отображаемый контент */
  children?: ReactNode;

  /** Кастомные стили, в качестве исключения. <br/> Cинтаксис внутри storybook: <br/> 👉 "color": "green" */
  style?: CSSProperties;

  /** Типографский стиль текста `display` — Roboto  `body` — Inter  `monospace` — SFMono-Medium */
  font?: TextFont;

  /** Размер текста */
  scale?: TextScale;

  /** Размер текста */
  size?: TextSizes;

  /** Начертание текста */
  weight?: TextWeight;

  /** Выключка текста */
  align?: TextAlign;

  /** Указывает тег html-разметки */
  as?: TextTags;

  /** Дополнительный кастомный класс */
  className?: string;

  /** По умолчанию block, если включено — inline */
  inline?: boolean;

  /** Событие по клику*/
  onClick?: React.MouseEventHandler;

  // fill?: boolean; // 🔴 — Доделать.

  /** 🔴 — Доделать. <br/> Максимальное количество строк текста (работает в связке с overflow) */
  maxLines?: 1; // доделать возможность скрыития строки
  /** 🔴 — Доделать. <br/> Задает отображение переполненного текста */
  overflow?: 'fade' | 'ellipsis' | 'fade-horizontal';
}

const StyledText = styled(Fragment)<TextProps>`
  display: ${(props) => (props.inline ? 'inline' : 'block')};

  ${(props) =>
    props.weight &&
    `     
    font-weight: ${props.theme.font.weight[props.weight]};                        
    `};
  ${(props) =>
    props.size &&
    props.scale &&
    `
    font-size: ${props.theme.font.size[props.size][props.scale]};
    line-height: ${props.theme.font.height[props.size][props.scale]};                  
    `};
  ${(props) =>
    props.font &&
    `
    font-family: ${props.theme.font.family[props.font]};
    `};
  ${(props) =>
    props.align &&
    `
     text-align: ${props.align};
    `}
`;

export const Text: FC<TextProps> = ({
  scale = 'lg',
  size = 'heading',
  weight = 'regular',
  font = 'body',
  children = 'Я текст',
  as = 'p',
  align = 'left',
  className,
  style,
  inline,
  onClick,
}): JSX.Element => {
  return (
    <StyledText
      onClick={onClick}
      scale={scale}
      size={size}
      weight={weight}
      font={font}
      align={align}
      as={as}
      inline={inline}
      className={className}
      style={style}
    >
      {children}
    </StyledText>
  );
};
