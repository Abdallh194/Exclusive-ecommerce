import { memo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaCheck } from "react-icons/fa";
type TModalProps = {
  show: boolean;
  handleClose: () => void;
};
function ModalConfirm({ show, handleClose }: TModalProps) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>
            Confirm Order <FaCheck />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Order has been successfully confirmed.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(ModalConfirm);
