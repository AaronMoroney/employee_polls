import { useState } from 'react';
import { PopUpModal } from '../../../features/modals'
import { Poll } from '../../../widgets/poll';

const Create = () => {
    const [ openModal, setOpenModal] = useState(true);

    return (
        <>
           <PopUpModal
                openModal={openModal}
                setOpenModal={setOpenModal} 
           />
           <Poll />
        </>
    )
}

export default Create