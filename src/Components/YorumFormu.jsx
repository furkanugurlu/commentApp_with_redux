import React, { useState } from 'react';


const YORUM_BASLANGIC = {
    display_name: "",
    body: ""
}
const YorumFormu = (props) => {
    const [yorum, setYorum] = useState(YORUM_BASLANGIC);

    const handleOnChange = e => {
        setYorum({ ...yorum, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h3>Yorum Yaz</h3>
            <form onSubmit={(e) => {
                props.handleSubmit(e, yorum);
                setYorum(YORUM_BASLANGIC);
            }} className="ui form">
                <div style={{ marginBottom: "15px" }} className="ui small icon input mb-4">
                    <input name="display_name" value={yorum.display_name} onChange={handleOnChange} type="text" placeholder="Adınız" />
                </div>
                <textarea name="body" value={yorum.body} onChange={handleOnChange} placeholder="Yorumunuz" rows="3"></textarea>
                <br />
                <br />
                <button className="ui primary button" type="submit">Yorum Gönder</button>
            </form>
        </>
    );
}

export default YorumFormu;