import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

const storybookMeta: ComponentMeta<typeof Button> = {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export default storybookMeta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};
