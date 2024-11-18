import { Radio } from './radio';
export default {
  title: 'Inputs/Radio',
  component: Radio,

  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  tags: ['autodocs'],
};

// export const Base = {
//   args: {
//     label: 'Я радиокнопка',
//     name: 'radio',
//     type: 'radio',
//   },
// };

// export const BaseStory = (args: { label: 'Я радиокнопка'; name: 'radio'; type: 'radio' }) => (
//   <>
//     <Radio name='asd' type='radio' value='sdfsdfdf' />
//   </>
// );
export const DefaultRadio = () => {
  const styles = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <>
      <div style={styles}>
        {/* <div className='atlantum-compact'> */}
        <Radio type={'radio'} name={'radio'} label={'1'} />
        <Radio type={'radio'} name={'radio'} label={'2'} />
        <Radio type={'radio'} name={'radio'} label={'3'} />
      </div>
    </>
  );
};
