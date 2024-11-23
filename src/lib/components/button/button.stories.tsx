import { Button } from './button02';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
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
    label: 'Я кнопка',
    color: 'neutral',
    appearance: 'filled',
    size: 'md',
  },
};
