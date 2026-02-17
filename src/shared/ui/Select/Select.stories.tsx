import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';


export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: [
        {value: 'value1', content: 'option1'},
        {value: 'value2', content: 'option2'},
        {value: 'value3', content: 'option3'}
    ]
};

export const Labelled = Template.bind({});
Labelled.args = {
    label: 'label1',
    options: [
        {value: 'value1', content: 'option1'},
        {value: 'value2', content: 'option2'},
        {value: 'value3', content: 'option3'}
    ]
};