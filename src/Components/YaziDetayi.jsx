import React, { useEffect, useState } from 'react';
import { api } from '../api';
import axios from 'axios';

import YaziYorumlari from './YaziYorumları';
import { Link } from 'react-router-dom';
import SilModal from './SilModal';

const YaziDetayi = (props) => {

    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    const { id } = props.match.params;

    const handleCommentSubmit = (e, yorum) => {
        //     setYorum(YORUM_BASLANGIC);
        e.preventDefault();
        api().post(`/posts/${id}/comments`, yorum)
            .then((respons) => {
                setYorumlar([...yorumlar, respons.data]);
            }).catch((error) => {
                console.log(error);
            })
    }



    useEffect(() => {
        axios.all([
            api().get(`/posts/${id}`),
            api().get(`/posts/${id}/comments`),
        ]).then(responses => {
            setYaziDetayi(responses[0].data);
            setYorumlar(responses[1].data)
        }).catch((error) => {
            console.log(error);
        })

        /*   axios.get(`http://localhost:3002/posts/${id}`).
          then(rsp =>{
              setYaziDetayi(rsp.data);
          });
          axios.get(`http://localhost:3002/posts/${id}/comments`).
          then((response) =>{
              setYorumlar(response.data)
          }) */

    }, [id]);

    return (
        <>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <div className="ui buttons">
                <Link className="ui blue button" to={`/posts/${yaziDetayi.id}/edit`}>Düzenle</Link>
                <SilModal yazi={yaziDetayi} push={props.history.push} />
            </div>
            <br />
            <br />
            <p> {yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
        </>
    );
}

export default YaziDetayi;