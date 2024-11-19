// https://www.youtube.com/watch?v=KvctnEZSvtM
import styled from 'styled-components';

interface IButtonProps {
  appearance?: 'filled' | 'outlined' | 'ghosty' | 'linked';
  color?: 'neutral' | 'lead' | 'success' | 'distuctive' | 'info' | 'warning';
  size?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  label?: string;
}

/*
  .button { color: #2c3e50; position: relative; }
.button::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: currentColor; opacity: 0.2; }

  */
// var color: string = '#939300';
//  content: ${(props) => props.beforeContent};
// & ${this}:after {

const ButtonStateLayer = styled.div<IButtonProps>`
  // color: inherit;
  background: color-mix(in srgb, currentColor 0%, transparent);
  &:hover {
    background: color-mix(in srgb, currentColor 30%, transparent);
  }
  &:active {
    background: color-mix(in srgb, currentColor 40%, transparent);
  }

  // border: 1px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;

  font-size: unset;
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
`;

const StyledButton = styled.button<IButtonProps>`
  border: 0px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;
  background: unset;
  font-size: unset;
  // color: inherit;
  gap: 8;
  border-radius: inherit;

  ${(props) => props.color === 'neutral' && `background:grey;`}
  ${(props) => props.color === 'lead' && `background:purple;`}
${(props) => props.color === 'success' && `background:green;`}
${(props) => props.color === 'distuctive' && `background:red;`}
${(props) => props.color === 'info' && `background:blue;`}
${(props) => props.color === 'warning' && `background:orange;`}

  ${(props) => props.appearance === 'filled' && `color:white;`}
  ${(props) =>
    props.appearance === 'outlined' &&
    `background: transparent;
    outline: 1px solid currentColor;
    color: inherit;
    `}
  ${(props) =>
    props.appearance === 'ghosty' &&
    `background: color-mix(in srgb, currentColor 10%, transparent);
    color: green;
    `}
  ${(props) =>
    props.appearance === 'linked' &&
    `background: transparent;
    color: green;
    `}
`;

export const ButtonWithStateLayer: React.FC<IButtonProps> = ({
  appearance = 'filled',
  color = 'lead',
  size = 'md',
  label = 'Buttonsd',
  disabled,
  iconAfter,
  iconBefore,
}) => {
  return (
    <>
      <StyledButton disabled={disabled} color={color} appearance={appearance}>
        <ButtonStateLayer size={size}>
          {/* <div className='button-wrap'> */}
          {iconBefore ? iconBefore : null}
          {label}
          {iconAfter ? iconAfter : null}
          {/* </div> */}
        </ButtonStateLayer>
      </StyledButton>
    </>
  );
};
