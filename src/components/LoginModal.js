import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
  border: "none",
};

function LoginModal() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              align="center"
              variant="h5"
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              Login
            </Typography>
            <IconButton
              onClick={handleClose}
              size="large"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <LoginForm callback={() => {}} />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
