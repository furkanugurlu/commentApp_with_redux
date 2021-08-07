import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import YaziFormu from './YaziFormu';


const YaziDuzenle = () => {
    const { id } = useParams;

    const yazi = useSelector(state => state.yaziDetayi)
    /* 
        useEffect(() => {
            api().get(`posts/${id}`)
                .then(rsp => {
                    setYazi({ title: rsp.data.title, content: rsp.data.content });
                })
        }, []) */
    return (
        <div>
            <h2>Yazı Düzenleme Formu</h2>
            <YaziFormu yazi={yazi} />
        </div>

    )
}


export default YaziDuzenle;