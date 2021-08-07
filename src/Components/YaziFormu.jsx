import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { api } from '../api';
import { Link, useHistory, useParams } from 'react-router-dom';
import { yaziDüzenle, yaziEkle } from '../actions';



const YaziFormu = (props) => {
    const [hata, setHata] = useState(false);
    const [yazi, setYazi] = useState({ title: "", content: "" });
    const [adres, setAdres] = useState("");

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setYazi({ ...yazi, [e.target.name]: e.target.value })
    }
    const Yazidegerleri = () => {
        if (yazi.title === "" && yazi.content === "") {
            setHata(true);
        } else {
            setHata(false);
            if (props.yazi?.title) {
                // pust işlemi
                dispatch(yaziDüzenle(id, yazi, history.push));
            } else {
                //add işlemi
                dispatch(yaziEkle(yazi, history.push));
            }

        }
    }

    useEffect(() => {
        if (props.yazi?.title && props.yazi.content)
            setYazi({ title: props.yazi.title, content: props.yazi.content })
    }, [props.yazi])

    const vote = () => {
        if (props.yazi?.title) { setAdres(`/posts/${id}`) }
        else { setAdres(`/`) }
        return adres;
    }

    setTimeout(() => {
        setHata(false);
    }, 6000)

    return (
        <>
            {hata
                ?
                <div className="ui error message">
                    <div className="header">Hata</div>
                    <p>Başlık ve yazı içeriği alanları doldurmak zorunludur</p>
                </div>
                : null
            }
            <div className="ui form">
                <div className="field">
                    <label>Yazi Başlığı</label>
                    <input name="title" value={yazi.title} type="text" onChange={onInputChange} />
                </div>
                <div className="field">
                    <label>Yazı İçeriği</label>
                    <textarea name="content" value={yazi.content} onChange={onInputChange} rows="3" />
                </div>
                <button onClick={Yazidegerleri} className="ui primary button"> Gönder</button>
                <Link to={vote} className="ui button">İptal Et</Link>
            </div>
        </>

    );
}


export default YaziFormu;