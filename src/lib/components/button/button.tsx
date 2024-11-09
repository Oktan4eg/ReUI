import styled from 'styled-components';

interface IButtonProps {
  appearance: 'filled' | 'outlined' | 'ghosty';
  size?: 'lg' | 'md' | 'sm';
  color?: 'lead' | 'success';
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  label?: string;
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
    props.size === 'lg' &&
    `
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;
    
    `}

  ${(props) =>
    props.size === 'md' &&
    `
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 16px;


        `}
  ${(props) =>
    props.size === 'sm' &&
    `
        border-radius: 8px;
        padding: 6px 8px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 12px;


        `}

	${(props) =>
    props.appearance === 'filled' &&
    `
            background: #713FD5;
            color: #ffffff;
            border-color: #713FD5;

            &:hover {
            background: #8450EC;
            color: #ffffff;
            border-color: #8450EC;
            }

            &:active {
            background: #936CEF;
            color: #ffffff;
            border-color: #936CEF;
            }
        `}

	${(props) =>
    props.appearance === 'outlined' &&
    `
            background: transparent;
            color: #713FD5;
            border-color: #713FD5;
            &:hover {
            background: #7C4BF11F;
            color: #713FD5;
            border-color: #713FD5;
            }

            &:active {
            background: #7C4BF152;
           color: #713FD5;
            border-color: #713FD5;
            }

        `}
	${(props) =>
    props.appearance === 'ghosty' &&
    `
            background: #E9E1FE;
            color: #713FD5;
            border-color: transparent;
            &:hover {
            background: #D6C6FB;
            color: #713FD5;
            border-color: transparent;
            }

            &:active {
            background: #C9B6F7;
           color: #713FD5;
            border-color: transparent;
            }

        `}


        ${(props) =>
    props.disabled &&
    `
            color: #ffffff;
            background: #bababa;
            border: #bababa;
            cursor: not-allowed;

            &:hover, &:active {
            color: #ffffff;
            background: #bababa;
            border: #bababa;

            `}
`;

export const Button: React.FC<IButtonProps> = ({
  appearance,
  color = 'lead',
  size = 'md',
  label = 'Button',
  disabled,
  iconAfter,
  iconBefore,
}) => {
  return (
    <StyledButton
      appearance={appearance}
      size={size}
      disabled={disabled}
      color={color}
    >
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </StyledButton>
  );
};
