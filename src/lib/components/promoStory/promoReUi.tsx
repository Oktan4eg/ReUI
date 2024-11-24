// import styled, { css, keyframes } from 'styled-components';

// export const TimerContainer = styled.div<{ time: number; currentNum: number }>`
//   position: relative;
//   z-index: 0;
//   width: 200px;
//   height: 150px;
//   border-radius: 12px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &::before {
//     content: '';
//     position: absolute;
//     z-index: -2;
//     left: -50%;
//     top: -50%;
//     width: 200%;
//     height: 200%;
//     animation: ${(props) => animateBorder((360 * props.currentNum) / props.time, 360 / props.time)},
//       ${animateBorderRotate} 4s linear infinite;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     left: 2px;
//     top: 2px;
//     width: calc(100% - 4px);
//     height: calc(100% - 4px);
//     background: #14181f;
//     border-radius: 12px;
//   }
// `;

// const animateBorder = (deg: number, step: number) => {
//   let myKeyframes = ``;
//   const delta = Math.round(400 / (360 / step));
//   for (let i = 0; i < delta + 1; i++) {
//     myKeyframes += `
//               ${100 * i / delta}%{
//                 background: conic-gradient(
//                   #37f 0deg ${`${deg - step * i / delta}deg`},
//                   #14181f ${`${deg - step * i / delta}deg`} 0deg
//                   );
//               }`
//   }

//   const anim2 = keyframes`${myKeyframes}`;

//   return css`${anim2} 1s linear forwards 1`
// };
/* export const PromoReUI = () => {
  return <StyledPromo>sdfsdf</StyledPromo>;
}; */
