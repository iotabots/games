import React, { useEffect, useRef, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import useMatrixText from "./useMatrixText";

const Backdrop = styled("div")(({ theme }) => ({
  zIndex: 1,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

const MatrixModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [letters, setLetters] = useState("");
  const textRef = useRef<HTMLDivElement>(null);
  const { library, account } = useWeb3React();
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  const firstText = "Hello " + account?.slice(0, 6) + ",";
  const secondText = "Welcome to the Matrix!";
  const intervalSpeed = 150;
  const firstMatrixText = useMatrixText({
    targetText: firstText,
    intervalSpeed,
  });
  const secondMatrixText = useMatrixText({
    targetText: secondText,
    intervalSpeed,
    delay: firstText.length * intervalSpeed,
  });

  useEffect(() => {
    if (account && !open) {
      //if (!textRef.current) return;
      setOpen(true);
    }
  }, [account]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Typography
          ref={textRef}
          variant="h4"
          component="div"
          sx={{ fontFamily: "monospace", margin: 0 }}
        >
          {firstMatrixText}
        </Typography>
        <Typography
          ref={textRef}
          variant="body1"
          component="div"
          sx={{ fontFamily: "monospace", margin: 0 }}
        >
          {secondMatrixText}
        </Typography>
      </Box>
    </Modal>
  );
};

export default MatrixModal;
