import React from 'react'
import VGradientCard from '../Common/VGradientCard';
import ArticleCard from '../Common/ArticleCard';


export default function Resources(props) {
    const { color, rightMini, leftMini, articles } = props

    return (
        <div className="section expertise-resources-block">
            <div className={color ? `right-rounded-semi-circle bottom-left transform-bottom-50 bg-${color}` : `right-rounded-semi-circle bottom-left transform-bottom-50 bg-green`} />
            <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>Ressources associées</h1>
            <div className="articles-container">
                <div className="container">
                    <img src={rightMini} alt="right mini" className="top-right" />
                    <img src={leftMini} alt="left mini" className="bottom-left" />
                    <div className="row">
                        {
                            articles.map((article, index) => (
                                <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4">
                                    <VGradientCard>
                                        <ArticleCard
                                            key={index}
                                            id={article.id}
                                            title={article.title}
                                            text={article.text}
                                            img={article.image}
                                            tag={article.tag}
                                            time={article.time} />
                                    </VGradientCard>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <button className={color ? `btn btn-custom btn-${color}` : 'btn btn-custom btn-green'}>Voir tous les articles</button>
        </div>
    )
}
