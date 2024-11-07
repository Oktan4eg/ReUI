import { FC } from 'react';
import styled from 'styled-components';

export interface PlaceholderProps {
  /**
   * Текстовое поля для ввода пользователем
   */
  text: string;
}

// color: ${(props) => props.theme.colors.text.loud.secondary};
const StyledPlaceholder = styled.div`
  color: grey;
`;

/**
 * Тестовый компонент заглушка
 */
export const Placeholder: FC<PlaceholderProps> = ({ text = 'Привет' }) => {
  return <StyledPlaceholder>{text}</StyledPlaceholder>;
};
