import React, { useEffect } from 'react';

import YaziYorumlari from './YaziYorumları';
import { Link, useHistory, useParams } from 'react-router-dom';
import SilModal from './SilModal';
import { yaziGetir, yorumEkle } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const YaziDetayi = () => {

    const dispatch = useDispatch();
    const yazi_Detayi = useSelector(state => state.yaziDetayi);

    const history = useHistory();
    const { id } = useParams();

    const handleCommentSubmit = (e, yorum) => {
        e.preventDefault();
        dispatch(yorumEkle(id, yorum));
    }

    useEffect(() => {
        dispatch(yaziGetir(id));
    }, []);

    return (
        <>
            <h2 className="ui header">{yazi_Detayi.title}</h2>
            <p>{yazi_Detayi.created_at}</p>
            <div style={{ marginBottom: 10 }} className="ui buttons">
                <Link className="ui blue button" to={`/posts/${yazi_Detayi.id}/edit`}>Düzenle</Link>
                <SilModal yazi={yazi_Detayi} />
            </div>
            <p> {yazi_Detayi.content}</p>
            <YaziYorumlari yorumlar={yazi_Detayi.yorumlar} handleSubmit={handleCommentSubmit} />

            <div className="ui grid">
                <div className="four column row">
                    <div className="right floated column">
                        <Link to="/" className="ui red button" type="submit">Geri</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default YaziDetayi;