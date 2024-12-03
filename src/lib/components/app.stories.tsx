import App from '../../App';

export default {
  title: 'App',

  component: App,
  parameters: {
    layout: 'centered',
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  // tags: ['autodocs'],
};

export const Base = {
  args: {},
};
