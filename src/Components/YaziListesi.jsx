import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';

const YaziListesi = () => {

    const [yaziListesi, setYaziListesi] = useState([]);

    useEffect(() => {
        api()
            .get('/posts')
            .then((response) => {
                setYaziListesi(response.data);
            })
    }, []);
    return (
        <div className="ui relaxed divided list">
            <Link to="/yaziekle" className="ui primary button">
                Yazı Ekle
            </Link>
            <br />
            <br />

            {

                yaziListesi.map((yazi) => {
                    return (
                        <div key={yazi.id} className="item">

                            <i className="large github middle aligned icon"></i>
                            <div className="content">
                                <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>
                                <div className="description">{yazi.created_at}</div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default YaziListesi;