import Link from "next/link";
import { BottomPart, Forgot, Or, Signup, Signuplink } from "./Bottom.styled";

const Bottom = () => {
  return (
    <BottomPart>
      <Or>
        <span>OR</span>
      </Or>
      <Forgot>
        <Link href="/reset">
          <a>Forgot Password?</a>
        </Link>
      </Forgot>
      <Signuplink>
        Dont have account,{" "}
        <Link href="/register">
          <a>Sign Up</a>
        </Link>
      </Signuplink>
    </BottomPart>
  );
};

export default Bottom;
