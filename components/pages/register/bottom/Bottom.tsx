import Link from "next/link";
import {
  BottomPart,
  Forgot,
  Or,
  Signuplink,
} from "../../login/bottom/Bottom.styled";

const Bottom = () => {
  return (
    <BottomPart>
      <Or>
        <span>OR</span>
      </Or>
      <Signuplink>
        Already have account,{" "}
        <Link href="/login">
          <a>Log In</a>
        </Link>
      </Signuplink>
    </BottomPart>
  );
};

export default Bottom;
