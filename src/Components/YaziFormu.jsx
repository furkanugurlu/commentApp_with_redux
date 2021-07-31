import React, { useEffect, useState } from 'react';

import { api } from '../api';
import { Link, withRouter } from 'react-router-dom';

const YaziFormu = (props) => {
    const [hata, setHata] = useState(false);
    const [yazi, setYazi] = useState({ title: "", content: "" })
    const [adres, setAdres] = useState("");



    const onInputChange = (e) => {
        setYazi({ ...yazi, [e.target.name]: e.target.value })
    }
    const Yazidegerleri = () => {
        if (yazi.title === "" && yazi.content === "") {
            setHata(true);
        } else {
            setHata(false);
            if (props.yazi?.title) {
                // edit işlemi 
                api()
                    .put(`/posts/${props.match.params.id}`, yazi)
                    .then(rsp => {
                        props.history.push(`/posts/${props.match.params.id}`);
                    }).catch((error) => {
                        console.log(error)
                    })
            } else {
                //add işlemi
                api()
                    .post(`/posts`, yazi)
                    .then((response) => {
                        props.history.push('/');
                    }).catch((error) => {
                        console.log(error);
                    })
            }

        }
    }

    useEffect(() => {
        if (props.yazi?.title && props.yazi.content) setYazi(props.yazi)
    }, [props.yazi])

    const vote = () => {
        if (props.yazi?.title) { setAdres(`/posts/${props.match.params.id}`) }
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


export default withRouter(YaziFormu);