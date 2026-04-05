import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { Article } from 'entities/Article';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage { ...args } />;

const article = 
    {
        "id": "1",
        "title": "Test article Test article",
        "subtitle": "Test article Test article Test article",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "views": 1234,
        "createdAt": "01.01.0001",
        "user": {
            'id': '1',
            'username': 'admin',
            'avatarUrl': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        "type": [
            "IT", "Science", 
        ],
        "blocks": [
            {
                "id": "2",
                "type": "CODE",
                // eslint-disable-next-line max-len
                "code": "content = (\n  <>\n      <div className={cls.avatarWrapper}>\n          <Avatar\n              size={200}\n              theme={AvatarTheme.ROUNDED}\n              src={data?.img}\n          />\n      </div>\n      <Text \n          title={data?.title}\n          text={data?.subtitle}\n      />\n  </>\n)\n"
            },
            {
                "id": "4",
                "type": "TEXT",
                "paragraphs": [
                    // eslint-disable-next-line max-len
                    "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros metus, aliquet a nisi at, rutrum aliquam lectus. Integer ornare ictum libero, a auctor dui bibendum eget. Nullam imperdiet ipsum quis lacus posuere sodales. Cras non malesuada sapien. Phasellus consectetur luctus sem, gravida elementum leo tempor ut. Nullam nec suscipit nulla, vitae porta neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius lorem vitae leo placerat placerat. Sed eu molestie est, vitae efficitur justo. Nulla fermentum metus lorem, in sagittis lorem pharetra at."
                ]
            }
        ]
    } as Article

export const Default = Template.bind({});
Default.args = {

};
Default.decorators = [];
