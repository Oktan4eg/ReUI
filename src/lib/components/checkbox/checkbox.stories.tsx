import { Checkbox } from './checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
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
    label: 'Я чекбокс',
    name: 'filled',
    type: 'checkbox',
  },
};
