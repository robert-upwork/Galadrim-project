import React from 'react'
import ArticleBox from './ArticleBox'
import EfisensTalk from './EfisensTalk'
import Demo from "../../../assets/Images/efilab/article.jpg"   
import Pagination from './Pagination';
import { useState } from 'react';

const news = {
    category: 'Cloud',
    title: 'Enjeux et bénéfices de la dématérialisation informatique',
    content: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri suam atque corrupti. Hanc ego assentior, cum teneam sententiam, quid malum  ',
    image: Demo,
    date: '2020-8-10',
    time: 5,
}

const newsItems = [...Array(150).keys()].map(i => ({ id: (i + 1), ...news }));

export default function ArticlesContainer() {

    const [items, setItems] = useState(newsItems)
    const [pageOfItems, setpageOfItems] = useState([])

    function onChangePage(pageOfItems) {
        setpageOfItems(pageOfItems);
    }
    return (
        <div className="section articles-block">
            {
                pageOfItems.map((item, index) => (index === 3 ?
                    <>
                        <div className="container">
                            <ArticleBox key={index} item={item} />
                        </div>
                        <EfisensTalk />
                    </> : <div className="container"><ArticleBox key={index} item={item} /></div>
                ))
            }
            <div>
                <Pagination items={items} onChangePage={onChangePage} />
            </div>
        </div>
    )
}
