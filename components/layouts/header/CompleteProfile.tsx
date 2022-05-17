import { NoProfile } from "./styled/HeadStyle.styled";
import Link from "next/link";

/**
 *
 * @returns No profile component
 */
const CompleteProfile = ({ auth }) => {
  //Checking if the page is edit page or not and also checking profile is not added from state
  if (
    // auth.gettingProfileError.status === 404 ||
    // auth.profile.firstname == undefined
    !auth
  )
    return (
      <NoProfile>
        <Link href="/profile/edit">
          <a>Complete your profile before you see the awesome pets.</a>
        </Link>
      </NoProfile>
    );

  return null;
};

export default CompleteProfile;
