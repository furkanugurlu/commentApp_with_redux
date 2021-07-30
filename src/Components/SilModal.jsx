import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { api } from '../api';

const SilModal = ({ yazi, push }) => {
    const [open, setOpen] = useState(false);
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    const handleDelete = (id) => {
        api().delete(`/posts/${id}`)
            .then(() => {
                close();
                push(`/`);
            })
            .catch((error) => {
                console.log(error);
            })
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
