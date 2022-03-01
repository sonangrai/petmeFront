import { addupdateDPApi } from "../../../../redux/api/profile";
import {
  ModalBox,
  DpModal,
  ModalTitile,
  ModalTitleBar,
  ModalClose,
  CancelModal,
} from "../../../../styled/Modal.styled";
import { ChooseImage } from "./Dpmodal.styled";
import { useState } from "react";

/**
 *
 * @returns Dp modal
 */
const Dpmodal = ({ showmodal, dpUpdateState }) => {
  const [loading, setloading] = useState(false);
  //Get image
  const getImage = (e) => {
    setloading(true);
    addupdateDPApi(e.target.files[0]).then(
      (res) => {
        setloading(false);
        dpUpdateState(res.data);
        showmodal(false);
      },
      (err) => {
        setloading(false);
        console.log(err);
      }
    );
  };

  return (
    <DpModal>
      <ModalBox>
        <ModalTitleBar>
          <ModalTitile>
            {loading ? "Uploading DP..." : "Change Display Picture"}
          </ModalTitile>
          <ModalClose>
            <span onClick={() => showmodal(false)}> X </span>
          </ModalClose>
        </ModalTitleBar>
        <ChooseImage>
          <label htmlFor="uploadDP">Upload Photo</label>
          <input type="file" id="uploadDP" onChange={getImage} />
        </ChooseImage>
        <CancelModal>
          <span onClick={() => showmodal(false)}>Close</span>
        </CancelModal>
      </ModalBox>
    </DpModal>
  );
};

export default Dpmodal;
