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

const Dp = ({ auth }) => {
  return (
    <Dpcontainer>
      <DpRow>
        <DpBox>
          <CurrentDp>
            <NextImage
              height="50px"
              src={
                auth?.profile?.avatar
                  ? auth.profile.avatar.secure_url
                  : "https://res.cloudinary.com/drqgginx9/image/upload/v1597550619/iaymy8inbxqsc2gbkumw.png"
              }
            />
          </CurrentDp>
        </DpBox>
        <NamePart>
          <UsernameTitle>
            {auth ? auth.user.username : "petlovershiba"}
          </UsernameTitle>
          <UpdateDp>
            <span>Change Display Photo</span>
          </UpdateDp>
        </NamePart>
      </DpRow>
    </Dpcontainer>
  );
};

export default Dp;
