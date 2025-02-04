import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


export default function ArticleBox(props) {
    const { id, category, image, title, content, date, time } = props.item
    return (
        <div className="article-box">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 d-flex">
                    <div className="article-image-box">
                        <img src={image} alt="News" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="article-info-box">
                        <div className="news-info">
                            <p><span>{category}</span>• {time} minutes</p>
                        </div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <span className="pub-date">Publié le 20 août 2020</span>
                        {/* <span className="pub-date">Publié le {date}</span> */}
                        <Link to={`/efilab/${id}`} className="article-link">Lire l’article<FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
