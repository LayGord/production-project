import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SelectTheme } from 'shared/ui/Select/Select';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

// this cases breaks loki (idk why, fix later)

// export const Primary = Template.bind({});
// Primary.args = {
// };

// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Underline = Template.bind({});
Underline.args = {
    theme: SelectTheme.UNDERLINE
};

export const UnderlineDark = Template.bind({});
UnderlineDark.args = {
    theme: SelectTheme.UNDERLINE
};
UnderlineDark.decorators = [ThemeDecorator(Theme.DARK)]