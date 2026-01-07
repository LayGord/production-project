import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonTheme } from './Button';


export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR_INVERTED
};

export const Icon = Template.bind({});
Icon.args = {
    children: 'icon',
    theme: ButtonTheme.ICON
};