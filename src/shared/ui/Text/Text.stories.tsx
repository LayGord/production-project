import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextThemes } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title text',
    text: 'Text text text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title text',
    text: 'Text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title text',
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title text',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text text text',
};

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text text text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Error',
    text: 'Something went wrong...',
    theme: TextThemes.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Error',
    text: 'Something went wrong...',
    theme: TextThemes.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
