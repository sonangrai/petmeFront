import NextImage from "../../../layouts/image/NextImage";
import {
  CurrentDp,
  DpBox,
  Dpcontainer,
  DpRow,
  NamePart,
  UpdateDp,
  UsernameTitle,
} from "./Dp.styled";

/**
 *
 * @returns Upload DP
 */

const Dp = () => {
  return (
    <Dpcontainer>
      <DpRow>
        <DpBox>
          <CurrentDp>
            <NextImage
              height="50px"
              src="https://res.cloudinary.com/drqgginx9/image/upload/v1597550619/iaymy8inbxqsc2gbkumw.png"
            />
          </CurrentDp>
        </DpBox>
        <NamePart>
          <UsernameTitle>petlovershiba</UsernameTitle>
          <UpdateDp>
            <span>Change Display Photo</span>
          </UpdateDp>
        </NamePart>
      </DpRow>
    </Dpcontainer>
  );
};

export default Dp;
