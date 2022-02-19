import {
  ModalBox,
  DpModal,
  ModalTitile,
  ModalTitleBar,
  ModalClose,
  CancelModal,
} from "../../../../styled/Modal.styled";
import { ChooseImage } from "./Dpmodal.styled";

/**
 *
 * @returns Dp modal
 */
const Dpmodal = ({ showmodal }) => {
  return (
    <DpModal>
      <ModalBox>
        <ModalTitleBar>
          <ModalTitile>Change Display Picture</ModalTitile>
          <ModalClose>
            <span onClick={() => showmodal(false)}> X </span>
          </ModalClose>
        </ModalTitleBar>
        <ChooseImage>
          <label for="uploadDP">Upload Photo</label>
          <input type="file" id="uploadDP" />
        </ChooseImage>
        <CancelModal>
          <span onClick={() => showmodal(false)}>Close</span>
        </CancelModal>
      </ModalBox>
    </DpModal>
  );
};

export default Dpmodal;
