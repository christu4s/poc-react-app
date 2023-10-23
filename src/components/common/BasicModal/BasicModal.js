import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CommonButton from "../CommonButton/CommonButton";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const BasicModal = ({children, open, hello, handleclose }) => {
  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
 



  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            alt="close"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
            onClick={handleclose}
            width={"15px"}
            height={"15px"}
            style={{ float: "right" }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {hello}
          </Typography>
          {children}
         
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
