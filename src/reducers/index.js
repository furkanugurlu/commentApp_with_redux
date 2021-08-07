const INITIAL_STATE = {
    yaziListesi: [],
    yaziListesiHata: "",
    yaziDetayi: { id: "", title: "", content: "", created_at: "", yorumlar: [] },
    yaziDetayıHata: "",
    yorumEkleHata: ""
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "YAZI_LISTESI_GETIR":
            return {
                ...state,
                yaziListesi: action.payload,
                yaziDetayi: { id: "", title: "", content: "", created_at: "", yorumlar: [] },
            }
        case "YAZI_LISTESI_GETIR_HATA":
            return { ...state, yaziListesiHata: action.payload }
        case "YAZI_GETIR":
            return { ...state, yaziDetayi: action.payload }
        case "YAZI_GETIR_HATA":
            return { ...state, yaziDetayıHata: action.payload }
        case "YORUM_EKLE":
            return {
                ...state, yaziDetayi:
                {
                    ...state.yaziDetayi,
                    yorumlar: [state.yaziDetayi.yorumlar, action.payload]
                }
            }
        case "YORUM_EKLE_HATA":
            return { ...state, yorumEkleHata: action.payload }
        case "YAZI_SIL":
            return { ...state, yaziListesi: state.yaziListesi.filter(yazi => yazi.id !== action.payload) }
        case "YAZI_DUZENLE":
            return { ...state, yaziDetayi: { ...state.yaziDetayi, ...action.payload } }
        case "YAZI_EKLE":
            return { ...state, yaziListesi: [...state.yaziListesi, action.payload] }
        default:
            return state;
    }
};