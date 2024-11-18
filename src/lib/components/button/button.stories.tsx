import { Button } from './button02';

export default {
  title: 'Компоненты/Button',
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
    label: 'Я ваша кнопка',
    color: 'neutral',
    appearance: 'filled',
    size: 'md',
  },
};
