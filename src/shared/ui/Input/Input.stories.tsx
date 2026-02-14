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
    id: "empty-dark",
};
EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PlaceholderDark = Template.bind({});
PlaceholderDark.args = {
    id: "placeholder-dark",
    placeholder: 'placeholder',
};
PlaceholderDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    id: "disabled",
    placeholder: 'placeholder',
    value: 'sometext',
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    id: "disabled-dark",
    placeholder: 'placeholder',
    value: 'sometext',
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const EmptyBorderless = Template.bind({});
EmptyBorderless.args = {
    id: "empty-borderless",
    borderless: true
};

export const PlaceholderBorderless = Template.bind({});
PlaceholderBorderless.args = {
    id: "placeholder-borderless",
    placeholder: 'placeholder',
    borderless: true
};

export const DisabledBorderless = Template.bind({});
DisabledBorderless.args = {
    id: "disabled-borderless",
    placeholder: 'placeholder',
    value: 'sometext',
    disabled: true,
    borderless: true
};

export const EmptyBorderlessDark = Template.bind({});
EmptyBorderlessDark.args = {
    id: "empty-dark-borderless",
    borderless: true
};
EmptyBorderlessDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PlaceholderBorderlessDark = Template.bind({});
PlaceholderBorderlessDark.args = {
    id: "placeholder-dark-borderless",
    placeholder: 'placeholder',
    borderless: true
};
PlaceholderBorderlessDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DisabledBorderlessDark = Template.bind({});
DisabledBorderlessDark.args = {
    id: "disabled-dark-borderless",
    placeholder: 'placeholder',
    value: 'sometext',
    disabled: true,
    borderless: true
};
DisabledBorderlessDark.decorators = [ThemeDecorator(Theme.DARK)];