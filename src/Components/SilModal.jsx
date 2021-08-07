import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { yaziSil } from '../actions';


const SilModal = ({ yazi }) => {

    const [open, setOpen] = useState(false);
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    const { push } = useHistory();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(yaziSil(id, close, push))
    }

    return (
        <>
            <Button onClick={show} color="red">Sil</Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Yazıyı Sil</Modal.Header>
                <Modal.Content>
                    <p><b>{yazi.title}</b>  başlıklı yazıyı silmek istermisiniz.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={close} >İptal Et</Button>
                    <Button onClick={() => handleDelete(yazi.id)} positive icon="delete" labelPosition="right" content="Evet , Sil" />
                </Modal.Actions>
            </Modal>
        </>
    );
}


export default SilModal;
