import React, { useEffect, useState } from 'react';
import { api } from '../api';
import YaziFormu from './YaziFormu';


const YaziDuzenle = (props) => {
    const { id } = props.match.params;

    const [yazi, setYazi] = useState({});

    useEffect(() => {
        api().get(`posts/${id}`)
            .then(rsp => {
                setYazi({ title: rsp.data.title, content: rsp.data.content });
            })
    }, [id])
    return (
        <div>
            <h2>Yazı Düzenleme Formu</h2>
            <YaziFormu yazi={yazi} />
        </div>

    )
}


export default YaziDuzenle;