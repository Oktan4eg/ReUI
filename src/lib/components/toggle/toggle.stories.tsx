import { Toggle } from './toggle';
export default {
  title: 'Inputs/Toggle',
  component: Toggle,

  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ['autodocs'],
};

export const Base = {
  args: {
    label: 'Я тоггл',
    name: 'checkbox',
    type: 'checkbox',
    color: 'lead',
  },
};

// export const BaseStory = (args: { label: 'Я радиокнопка'; name: 'radio'; type: 'radio' }) => (
//   <>
//     <Radio name='asd' type='radio' value='sdfsdfdf' />
//   </>
// );
// export const DefaultRadio = () => {
//   const styles = {
//     display: 'flex',
//     gap: '20px',
//   };

//   return (
//     <>
//       <div style={styles}>
//         {/* <div className='atlantum-compact'> */}
//         <Toggle type={'radio'} name={'radio'} label={'1'} />
//         <Toggle type={'radio'} name={'radio'} label={'2'} />
//         <Toggle type={'radio'} name={'radio'} label={'3'} />
//       </div>
//     </>
//   );
// };
