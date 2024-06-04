import { useState } from 'react';

import PopUpModal from '../../../features/polls/ui/PopUpModal';
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