import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';


export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [RouterDecorator];