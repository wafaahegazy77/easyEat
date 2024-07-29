
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const VidSec = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='video_sec section'>
                <div className="container">
                    <div className="inner">
                        
                    <Button className='play_butn' onClick={handleShow}>
                        Play
                    </Button>


                        <img src="./assets/images/video_bg.jpeg" alt="bg" className='bg' />
                    </div>
                </div>
            </section>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='vidModal'>
                <Modal.Body>
                    <img src="./assets/images/video_bg.jpeg" alt="" className='secImg' />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VidSec
