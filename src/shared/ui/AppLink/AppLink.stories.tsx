import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    to: '/',
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
};

export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
    to: '/',
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    to: '/',
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    to: '/',
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
