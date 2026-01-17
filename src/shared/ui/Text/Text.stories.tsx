import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const WithTitleAndText = Template.bind({});
WithTitleAndText.args = {
    title: 'title',
    text: 'text',
};

export const WithOnlyTitle = Template.bind({});
WithOnlyTitle.args = {
    title: 'title',
};

export const WithOnlyText = Template.bind({});
WithOnlyText.args = {
    text: 'text',
};

export const WithTitleAndTextDark = Template.bind({});
WithTitleAndTextDark.args = {
    title: 'title',
    text: 'text',
};
WithTitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithOnlyTitleDark = Template.bind({});
WithOnlyTitleDark.args = {
    title: 'title',
};
WithOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithOnlyTextDark = Template.bind({});
WithOnlyTextDark.args = {
    text: 'text',
};
WithOnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

