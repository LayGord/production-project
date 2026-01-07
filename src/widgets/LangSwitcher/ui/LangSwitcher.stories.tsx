import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';


export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;
// @ts-ignore
const Template: ComponentStory<typeof Navbar> = (args) => <LangSwitcher {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
