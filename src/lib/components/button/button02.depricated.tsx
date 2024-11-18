import styled from 'styled-components';

interface IButtonProps {
  appearance: 'filled' | 'outlined' | 'tonal' | 'linked';
  color?: 'neutral' | 'lead' | 'success' | 'distucrive' | 'info' | 'warning';
  size?: 'lg' | 'md' | 'sm';
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
  transition: all 250ms ease;

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
    props.color === 'lead' &&
    `
            background: ${props.theme.colors.lead.primary};
            color: ${props.theme.colors.lead.contrast};
            border-color: transparent;

            &:hover {
            background: ${props.theme.colors.lead.hover};
            color: ${props.theme.colors.lead.contrast};
            border-color: transparent;
            }

            &:active {
            background: ${props.theme.colors.lead.active};
            color: ${props.theme.colors.lead.contrast};
            border-color: transparent;
            }
        `}
	${(props) =>
    props.appearance === 'filled' &&
    props.color === 'neutral' &&
    `
            background: #000000;
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
    props.appearance === 'filled' &&
    props.color === 'success' &&
    `
            background: green;
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
    props.appearance === 'filled' &&
    props.color === 'distucrive' &&
    `
            background: red;
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
    props.appearance === 'filled' &&
    props.color === 'info' &&
    `
            background: blue;
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
    props.appearance === 'filled' &&
    props.color === 'warning' &&
    `
            background: orange;
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
    props.color === 'lead' &&
    `
            background: transparent;
            color: ${props.theme.colors.lead.primary};
            border-color: ${props.theme.colors.lead.primary};

            &:hover {
            background: ${props.theme.colors.lead.ghosty.hover};
            color: ${props.theme.colors.lead.hover};
            border-color: ${props.theme.colors.lead.hover};
            }

            &:active {
            background: ${props.theme.colors.lead.ghosty.active};
            color: ${props.theme.colors.lead.active};
            border-color: ${props.theme.colors.lead.active};
              `}
        ${(props) =>
    props.appearance === 'outlined' &&
    props.color === 'neutral' &&
    `
                  background: transparent;
                  color: grey;
                  border-color: grey;
      
                  &:hover {
                  background: transparent;
                  color: grey;
                  border-color: grey;
                  }
      
                  &:active {
                  background: transparent;
                  color: grey;
                  border-color: grey;
                  }
              `}
        ${(props) =>
    props.appearance === 'outlined' &&
    props.color === 'success' &&
    `
                  background: transparent;
                  color: green;
                  border-color: green;
      
                  &:hover {
                  background: transparent;
                  color: green;
                  border-color: green;
                  }
      
                  &:active {
                  background: transparent;
                  color: green;
                  border-color: green;
                  }
              `}
        ${(props) =>
    props.appearance === 'outlined' &&
    props.color === 'distucrive' &&
    `
                  background: transparent;
                  color: red;
                  border-color: red;
      
                  &:hover {
                  background: transparent;
                  color: red;
                  border-color: red;
                  }
      
                  &:active {
                  background: transparent;
                  color: orange;
                  border-color: orange;
                  }
              `}
        ${(props) =>
    props.appearance === 'outlined' &&
    props.color === 'info' &&
    `
                  background: transparent;
                  color: blue;
                  border-color: blue;
      
                  &:hover {
                  background: transparent;
                  color: blue;
                  border-color: blue;
                  }
      
                  &:active {
                  background: transparent;
                  color: blue;
                  border-color: blue;
                  }
              `}
        ${(props) =>
    props.appearance === 'outlined' &&
    props.color === 'warning' &&
    `
                  background: transparent;
                  color: orange;
                  border-color: orange;
      
                  &:hover {
                  background: transparent;
                  color: orange;
                  border-color: orange;
                  }
      
                  &:active {
                  background: transparent;
                  color: orange;
                  border-color: orange;
                  }
              `}
    ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'lead' &&
    `
            background: ${props.theme.colors.lead.ghosty.secondary};
            color: ${props.theme.colors.lead.primary};
            border-color: transparent;

            &:hover {
            background: ${props.theme.colors.lead.ghosty.hover};
            color: ${props.theme.colors.lead.hover};
            border-color: transparent;
            }

            &:active {
            background: ${props.theme.colors.lead.ghosty.active};
            color: ${props.theme.colors.lead.active};
            border-color: transparent;
                  }
              `}
        ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'neutral' &&
    `
                  background: #60606030;
                  color: #60606030;
                  border-color: transparent;
      
                  &:hover {
                  background: #60606050;
                  color: #60606050;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #60606080;
                  color: #60606080;
                  border-color: transparent;
                  }
              `}
        ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'success' &&
    `
                  background: #10e00030;
                  color: green;
                  border-color: transparent;
      
                  &:hover {
                  background: #10e00050;
                  color: green;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #10e00080;
                  color: green;
                  border-color: transparent;
                  }
              `}
        ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'distucrive' &&
    `
                  background: #ff101030;
                  color: red;
                  border-color: transparent;
      
                  &:hover {
                  background: #ff101050;
                  color: red;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #ff101080;
                  color: red;
                  border-color: transparent;
                  }
              `}
        ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'info' &&
    `
                  background: #1010ff30;
                  color: blue;
                  border-color: transparent;
      
                  &:hover {
                  background: #1010ff50;
                  color: blue;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #1010ff80;
                  color: blue;
                  border-color: transparent;
                  }
              `}
        ${(props) =>
    props.appearance === 'tonal' &&
    props.color === 'warning' &&
    `
                  background: #f0f0ff30;
                  color: orange;
                  border-color: transparent;
      
                  &:hover {
                  background: #f0f0ff50;
                  color: orange;
                  border-color: transparent;
                  }
      
                  &:active {
                  background: #f0f0ff80;
                  color: orange;
                  border-color: transparent;
                  }
              `}
${(props) =>
    props.appearance === 'linked' &&
    props.color === 'lead' &&
    `
            background: transparent;
            color: ${props.theme.colors.lead.primary};
            border-color: transparent;

            &:hover {
            background: ${props.theme.colors.lead.ghosty.hover};
            color: ${props.theme.colors.lead.hover};
            border-color: transparent;
            }

            &:active {
            background: ${props.theme.colors.lead.ghosty.active};
            color: ${props.theme.colors.lead.active};
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

export const Button2: React.FC<IButtonProps> = ({
  appearance,
  color = 'lead',
  size = 'md',
  label = 'Button',
  disabled,
  iconAfter,
  iconBefore,
}) => {
  return (
    <StyledButton appearance={appearance} size={size} disabled={disabled} color={color}>
      {iconBefore ? iconBefore : null}
      {label}
      {iconAfter ? iconAfter : null}
    </StyledButton>
  );
};
