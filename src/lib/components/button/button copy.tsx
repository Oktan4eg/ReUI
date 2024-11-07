import styled from 'styled-components';

interface IButtonProps {
  appearance: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'base';
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
}

const StyledButton = styled.button<IButtonProps>`
  border: none;
  border: 1px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;
  background: unset;
  font-size: unset;
  gap: 8;

  ${(props) =>
    props.size === 'base' &&
    `
        padding: 0 16;
        height: 16;
        font-size: 16;
        line-height: 16;
        font-weight: 16;

        `}

  ${(props) =>
    props.size === 'small' &&
    `
        padding: 0 16;
        height: 16;
        font-size: 16;
        line-height: 16;
        font-weight: 16;


        `}

	${(props) =>
    props.appearance === 'primary' &&
    `
            background: ${props.theme.colors.bg.inverse};
            color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};

            &:hover {
            background: ${props.theme.colors.bg.inverse};
            color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};
            }

            &:active {
            background: ${props.theme.colors.bg.inverse};
            color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};
            }
        `}

	${(props) =>
    props.appearance === 'secondary' &&
    `
            background: ${props.theme.colors.bg.inverse};
            color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};
            &:hover {
            background: ${props.theme.colors.bg.inverse};
            color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};
            }

            &:active {
            background: ${props.theme.colors.bg.inverse};
           color: ${props.theme.colors.bg.inverse};
            border-color: ${props.theme.colors.bg.inverse};
            }

        `}


        ${(props) =>
    props.disabled &&
    `
            color: ${props.theme.colors.bg.inverse};
            background: ${props.theme.colors.bg.inverse};
            border: ${props.theme.colors.bg.inverse};
            cursor: not-allowed;

            &:hover, &:active {
            color: ${props.theme.colors.bg.inverse};
            background: ${props.theme.colors.bg.disabled};
            border: ${props.theme.colors.bg.inverse};

            `}
`;

export const Button2: React.FC<IButtonProps> = ({
  appearance,
  size,
  disabled,
  iconAfter,
  iconBefore,
}) => {
  return (
    <StyledButton appearance={appearance} size={size} disabled={disabled}>
      {iconBefore ? iconBefore : null}
      Hello
      {iconAfter ? iconAfter : null}
    </StyledButton>
  );
};
