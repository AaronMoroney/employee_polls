import  PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { 
  // useEffect, 
  useMemo } from 'react';
import { 
  Box, 
  Typography, 
  Modal, 
  Button, 
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const PopUpModal = ({ openModal, setOpenModal}) => {
  const theme = useTheme();

  // extract to helper
  const style = useMemo(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '1px solid slategrey',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
    backgroundColor: theme.palette.background.paper
  }), [theme]);

  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false)
    navigate('/');
  }


  // MAKE SURE TO ADD AS A WIDGET
  return (
    <>
      <Modal
        open={openModal}
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
          >
            <Close />
            CLOSE
          </Button>
           <Typography  variant="h6" component="h2">
             Text in a modal
           </Typography>
         </Box>
      </Modal>
    </>
  );
}

export default PopUpModal

PopUpModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func.isRequired
}