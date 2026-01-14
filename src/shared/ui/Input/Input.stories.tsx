import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    id: "empty",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    id: "placeholder",
    placeholder: 'placeholder',
};


export const EmptyDark = Template.bind({});
EmptyDark.args = {
    id: "emptydark",
};
EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PlaceholderDark = Template.bind({});
PlaceholderDark.args = {
    id: "placeholderdark",
    placeholder: 'placeholder',
};
PlaceholderDark.decorators = [ThemeDecorator(Theme.DARK)];