import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalDefault = Template.bind({});
ModalDefault.args = {
    isOpen: true,
    children: 'Hello from modal!',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Hello from modal!',
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
