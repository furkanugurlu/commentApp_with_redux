import { api } from "../api";
import Axios from "axios";

export const yaziListesiGetir = () => (dispatch) => {
    api()
        .get('/posts')
        .then((response) => {
            dispatch({ type: "YAZI_LISTESI_GETIR", payload: response.data })
        }).catch(() => {
            dispatch({
                type: "YAZI_LISTESI_GETIR_HATA",
                payload: "Yazılar Getirilirken ahata oluştu"
            })
        })
};


export const yaziGetir = (id) => dispatch => {
    Axios.all([
        api().get(`/posts/${id}`),
        api().get(`/posts/${id}/comments`)
    ]).then((rsp) => {
        const payload = {
            ...rsp[0].data,
            yorumlar: rsp[1].data
        }
        dispatch({ type: "YAZI_GETIR", payload: payload });
    }).catch((error) => {
        dispatch({ type: "YAZI_GETIR_HATA", payload: "Yazi yüklenirken hata oluştu" });
    })
};

export const yaziDüzenle = (id, yazi, push) => dispatch => {
    console.log({ yazi });
    api()
        .put(`/posts/${id}`, yazi)
        .then(rsp => {
            dispatch({ type: "YAZI_DUZENLE", payload: rsp.data })
            push(`/posts/${id}`);
        }).catch((error) => {

        })
}
export const yaziEkle = (yazi, push) => dispatch => {
    api()
        .post(`/posts`, yazi)
        .then((response) => {
            dispatch({ type: "YAZI_EKLE", payload: response.data })
            push(`/`);
        }).catch((error) => {
            console.log(error);
        })
}

export const yorumEkle = (id, yorum) => dispatch => {
    api().post(`/posts/${id}/comments`, yorum)
        .then((response) => {
            dispatch({ type: "YORUM_EKLE", payload: response.data })
        }).catch((error) => {
            dispatch({ type: "YORUM_EKLE_HATA", payload: "Yorum eklerken hata oluştu" })
        })
}

export const yaziSil = (id, close, push) => dispatch => {
    api().delete(`/posts/${id}`)
        .then(() => {
            dispatch({ type: "YAZI_SIL", payload: id })
            close();
            push(`/`);
        })
        .catch((error) => {
            console.log(error);
        })
}
