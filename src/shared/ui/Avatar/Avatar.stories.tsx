import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, AvatarTheme } from './Avatar';
import AvatarDefaultImg from './avatar_default.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarDefaultImg,
    alt: 'avatar'
};

export const Rounded = Template.bind({});
Rounded.args = {
    src: AvatarDefaultImg,
    alt: 'avatar',
    theme: AvatarTheme.ROUNDED,
};

export const PrimaryEditable = Template.bind({});
PrimaryEditable.args = {
    src: AvatarDefaultImg,
    alt: 'avatar',
    editable: true
};

export const RoundedEditable = Template.bind({});
RoundedEditable.args = {
    src: AvatarDefaultImg,
    alt: 'avatar',
    theme: AvatarTheme.ROUNDED,
    editable: true,
};