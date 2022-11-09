import React from 'react';

import { Button } from '../../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'App/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      label: {
        name: 'label',
        description: "Words on the button", 
        type: { name: 'string', required: false },
        defaultValue: "Basic"
      },
      disabled: false
    },
  };

  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
