import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/Article';
import JSLogo from 'shared/assets/tests/JavaScript-logo.jpg';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails { ...args } />;

const data: Article = {
    id: "1",
    title: "Test article test article test article",
    subtitle: "Test article test article test article",
    img: JSLogo,
    views: 100,
    createdAt: "01.01.0001",
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "test text block",
            paragraphs: [
                // eslint-disable-next-line max-len
                "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros metus, aliquet a nisi at, rutrum aliquam lectus. Integer ornare ictum libero, a auctor dui bibendum eget. Nullam imperdiet ipsum quis lacus posuere sodales. Cras non malesuada sapien. Phasellus consectetur luctus sem, gravida elementum leo tempor ut. Nullam nec suscipit nulla, vitae porta neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem vitae leo placerat placerat. Sed eu molestie est, vitae efficitur justo. Nulla fermentum metus lorem, in sagittis lorem pharetra at.",
            ]
        },
        {
            id: "2",
            type: ArticleBlockType.CODE,
            // eslint-disable-next-line max-len
            code: '//test code block \nconsole.log("hello from storybook")\n\nsetTimeout(() => {\n    console.log("hello from sb again");\n}, 1000)'
        },
        {
            id: "3",
            type: ArticleBlockType.IMAGE,
            src: JSLogo,
            title: 'test image block title'
        }
    ]
}

export const Default = Template.bind({});
Default.args = {
    
};
Default.decorators = [StoreDecorator({articleDetails: {
    data: data
}})];


export const Loading = Template.bind({});
Loading.args = {
    
};
Loading.decorators = [StoreDecorator({articleDetails: {
    isLoading: true
}})];