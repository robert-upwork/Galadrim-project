import React from 'react';
import ArticleImage from "../../assets/home/images/article.jpg";
import ArticleCard from "../global/article_card";
import  FormesImageOrigin from '../../assets/expertise/cloud/orange-mini.svg';
import  FormesImageGreen from '../../assets/expertise/cloud/vert-mini.svg';

const items = [
    {
        id: '1',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-danger',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '2',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-success',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '3',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-danger',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
    {
        id: '4',
        img: ArticleImage,
        title: 'Enjeux et bénéfices de la dématérialisation informatique',
        text: 'Si sine metu contineret, saluti prospexit civium, qua intellegebat contineri.',
        buttonText: 'Lire l’article',
        active: false,
        tagClass: 'badge badge-success',
        tagText: 'Univers',
        timeText: '5 Minutes'
    },
]

class Resource extends React.Component{

    state = {
        items: items
    }

    handleMouseEnter = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.id === id) {
                item.active = true
            } else {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    handleMoustLeave = (id) => {
        const { items } = this.state;
        items.forEach((item) => {
            if (item.id === id) {
                item.active = false
            }
        })

        this.setState({ items: items })
    }

    render(){
        return (
            <div className={'resource'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 text-center'}>
                            <div className={'title-area'}>
                                <h1 style={{color: this.props.theme.mainColor}}>Ressources associées</h1>
                                {/*<p style={{color: this.props.theme.mainColor}}>Quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas expetenda.</p>*/}
                            </div>
                        </div>
                        <div className={'col-lg-12'}>
                            <div className={'row card-area'}>
                                <img src={FormesImageOrigin} className={'bottom-left-img'} alt=""/>
                                <img src={FormesImageGreen} className={'top-right-img'} alt=""/>
                                {
                                    items.map((item, index) => (
                                        <div key={index} className="col-md-6 col-lg-3">
                                            <ArticleCard
                                                id={item.id}
                                                active={item.active}
                                                img={item.img}
                                                title={item.title}
                                                text={item.text}
                                                tagClass={item.tagClass}
                                                tagText={item.tagText}
                                                timeText={item.timeText}
                                                buttonText={item.buttonText}
                                                onMouseEnter={this.handleMouseEnter}
                                                onMouseLeave={this.handleMoustLeave}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={'col-lg-12 action-button-area'}>
                            <button className={'btn btn-custom'} style={{background: this.props.theme.mainColor}}>
                                Voir tous les articles
                            </button>
                        </div>
                    </div>
                </div>
                <div className='green-left-bottom-semi-circle'/>
            </div>
        );
    }
}

export default Resource