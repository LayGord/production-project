//import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { Article, ArticleList } from 'entities/Article';


interface ArticlesPageProps {
   className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    //const { t } = useTranslation()

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

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList 
                className={cls.articlesList}
                articles={
                    new Array(16).fill(0).map((val, index) => ({...article, id: String(index)}))
                }
            />
        </div>
    );
}

export default memo(ArticlesPage);