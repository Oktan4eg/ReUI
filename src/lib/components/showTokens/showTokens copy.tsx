// import { GlobalStyle, lightTheme } from '../../theme';
// import { Button } from '../button/button02';

// export function ShowTokens1() {
//   const tokens = [];
//   const colors = [];
//   const font = [];
//   const spacing = [];
//   //   var obj = { a: 'test1', b: 'test2' };
//   //   if (Object.values(obj).indexOf('test1') > -1) {
//   //     console.log('has test1');
//   //   }
//   for (const a in lightTheme) {
//     tokens.push(<li key={'tokens' + a}>{a}</li>);
//   }
//   for (const i in lightTheme.colors) {
//     colors.push(
//       <div style={{ marginLeft: '0px' }} key={i}>
//         {/* <span
//           style={{
//             padding: '4px',
//             borderRadius: '12px',
//             marginRight: '4px',
//             backgroundColor: `${lightTheme.colors[i]}`,
//           }}
//         >
//           {'    '}
//         </span> */}
//         {i}
//       </div>
//     );
//     // eslint-disable-next-line
//     console.log(Object.entries(lightTheme.colors[i]));
//     for (const ii in lightTheme.colors[i]) {
//       //   console.log(Object.keys(lightTheme.colors[i][ii]));
//       colors.push(
//         <div style={{ marginLeft: '20px' }} key={i + ii}>
//           {/* <span
//             style={{
//               padding: '4px',
//               borderRadius: '12px',
//               marginRight: '4px',
//               backgroundColor: `${lightTheme.colors[i][ii]}`,
//               border: '1px solid #66666622',
//             }}
//           >
//             {'    '}
//           </span> */}
//           {ii}
//         </div>
//       );
//       // eslint-disable-next-line.
//       for (const iii in lightTheme.colors[i][ii]) {
//         if (Object.values(iii).indexOf(lightTheme.colors[i][ii]) > -1) {
//           console.log('нет свойств');
//         }
//         // if (iii == '0') {
//         //   // прерываем выполнение цикла
//         //   console.log('breack');
//         //   break;
//         // }
//         // console.log(Object.values(iii).indexOf(lightTheme.colors[i][ii]));
//         colors.push(
//           <div style={{ margin: '8px', marginLeft: '20px' }} key={i + ii + iii}>
//             <span
//               style={{
//                 padding: '4px',
//                 borderRadius: '12px',
//                 marginRight: '4px',
//                 backgroundColor: `${lightTheme.colors[i][ii][iii]}`,
//                 border: '1px solid #66666622',
//               }}
//             >
//               {'    '}
//             </span>
//             {iii}
//           </div>
//         );
//       }
//       //   for (const iii in lightTheme.colors.lead.default) {
//       //     colors.push(
//       //       <div style={{ margin: '20px', backgroundColor: `${lightTheme.colors.lead.default[iii]}` }}>
//       //         <span style={{ marginLeft: '40px' }} key={iii}>
//       //           {iii}
//       //         </span>
//       //       </div>
//       //     );
//       //   }
//       // }
//     }
//   }
//   for (const i in lightTheme.font) {
//     font.push(<li key={i}>{i}</li>);
//   }
//   for (const i in lightTheme.spacing) {
//     spacing.push(<li key={i}>{i}</li>);
//   }

//   return (
//     <section
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(6, 1fr)',
//         justifyContent: 'space-between',
//         gap: '96px',
//         paddingBlock: '24px',
//       }}
//     >
//       <div>
//         <p style={{ marginBottom: '24px' }}>Variables</p>
//         <ul style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>{tokens}</ul>
//       </div>
//       <div>
//         <p style={{ marginBottom: '24px' }}>Colors</p>
//         <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>{colors}</div>
//       </div>
//       <div>
//         <p style={{ marginBottom: '24px' }}>Font</p>
//         <ul style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>{font}</ul>
//       </div>
//       <div>
//         <p style={{ marginBottom: '24px' }}>Spacing</p>
//         <ul style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>{spacing}</ul>
//       </div>
//     </section>
//   );
// }

// // export function ShowTokens2() {
// //   let TokenNames = [];
// //   let ColorTokenNames = [];
// //   let FontTokenNames = [];
// //   let i = 0;
// //   for (const TokenName in lightTheme) {
// //     i++;
// //     TokenNames.push(<div key={TokenName}>{TokenName}</div>);
// //     // console.log(TokenName + ' : ' + i);

// //     for (const ColorsTokenName in lightTheme.colors) {
// //       ColorTokenNames.push(<div key={ColorsTokenName}>{ColorsTokenName}</div>);
// //     }
// //     for (const FontTokenName in lightTheme.font) {
// //       FontTokenNames.push(<div key={FontTokenName}>{FontTokenName}</div>);
// //     }
// //   }

// //   return (
// //     <section
// //       style={{
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(7, 1fr)',
// //         justifyContent: 'space-between',
// //         gap: '24px',
// //         paddingBlock: '24px',
// //       }}
// //     >
// //       {TokenNames}
// //       <section
// //         style={{
// //           display: 'collumn',
// //           gridTemplateColumns: 'repeat(7, 1fr)',
// //           justifyContent: 'space-between',
// //           gap: '24px',
// //           paddingBlock: '24px',
// //         }}
// //       >
// //         {ColorTokenNames}
// //       </section>
// //       <section
// //         style={{
// //           display: 'collumn',
// //           gridTemplateColumns: 'repeat(7, 1fr)',
// //           justifyContent: 'space-between',
// //           gap: '24px',
// //           paddingBlock: '24px',
// //         }}
// //       >
// //         {FontTokenNames}
// //       </section>
// //     </section>
// //   );
// // }
