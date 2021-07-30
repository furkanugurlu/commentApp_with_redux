import React from 'react';

const YorumListesi = (props) => {
    return (
        (
            <>
                <h3>Yorumlar</h3>
                {props.yorumlar.map((yorum) => {
                    return (
                        <div key={yorum.id} className="ui relaxed list" >
                            <div className="item">
                                <i className="large github middle aligned icon" />
                                <div className="content">
                                    <span className="header">{yorum.display_name}</span>
                                    <div className="description">{yorum.body}</div>
                                </div>
                            </div>
                        </div>
                    );
                }
                )}
            </>
        )
    );
}

export default YorumListesi;