import * as React from 'react';
import { FC, Fragment, ReactNode } from 'react';
import styled from 'styled-components';

type TextSize = 'label' | 'subLabel';

type TextTags =
  | 'p'
  | 'i'
  | 'u'
  | 'abbr'
  | 'cite'
  | 'del'
  | 'em'
  | 'ins'
  | 'kbd'
  | 'mark'
  | 's'
  | 'samp'
  | 'span'
  | 'small'
  | 'strong'
  | 'sub'
  | 'sup';

interface TextProps {
  children?: ReactNode;

  /**
   *  Указывает каким должен быть текст html-разметки
   * */
  as?: TextTags;

  /**
   *  Change size from base `16px`
   *  to label `14px`
   *  or sub label `12px`
   * */
  size?: TextSize;

  /**
   *  If `true` text-align:center rule are applied.
   * */
  centered?: boolean;

  /**
   * Дополнительный кастомный класс
   */
  className?: string;
}

const StyledText = styled(Fragment)<TextProps>`
  font-size: ${(props) => props.theme.font.size.body};
  font-weight: ${(props) => props.theme.font.weight.regular};
  line-height: ${(props) => props.theme.font.height.body};
  color: ${(props) => props.theme.colors.fg.default.primary};
  margin: 0;

  ${(props) =>
    props.centered &&
    `
        text-align: center;
    `}

  ${(props) =>
    props.size === 'label' &&
    `
        font-size: ${props.theme.font.size.body};
        line-height: ${props.theme.font.height.body};
    `}

    ${(props) =>
    props.size === 'subLabel' &&
    `
        font-size: ${props.theme.font.size.body};
        line-height: ${props.theme.font.height.body};
    `}
`;

export const TextOld: FC<TextProps> = ({ as, children, size, centered, className }) => {
  return (
    <StyledText as={as} size={size} centered={centered} className={className}>
      {children}
    </StyledText>
  );
};
