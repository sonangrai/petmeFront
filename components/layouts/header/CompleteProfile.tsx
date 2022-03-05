import { NoProfile } from "./styled/HeadStyle.styled";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 *
 * @returns No profile component
 */
const CompleteProfile = ({ auth }) => {
  let router = useRouter();

  //Checking if the page is edit page or not and also checking profile is not added from state
  if (
    (router.asPath !== "/profile/edit" &&
      auth.gettingProfileError.status === 404) ||
    auth.profile.firstname == undefined
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
