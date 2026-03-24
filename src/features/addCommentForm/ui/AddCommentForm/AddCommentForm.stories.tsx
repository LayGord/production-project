import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'shared/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm { ...args } />;

export const Default = Template.bind({});
Default.args = {

};
Default.decorators = [];
