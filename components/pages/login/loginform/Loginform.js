import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";
import { ErrorLabel } from "../../../forms/form.styled";

const Loginform = ({ loginDispatch, authData }) => {
  const [data, setData] = useState({
    logtype: "",
    password: "",
  });

  //Gets data from input and put in state
  const attachData = (n, d) => {
    setData({ ...data, [n]: d });
  };

  //Submit form
  const submit = (e) => {
    e.preventDefault();
    loginDispatch(data);
  };

  return (
    <LoginForm>
      <TheForm onSubmit={submit}>
        <FormItem
          type="text"
          placeholder="Email or Username"
          name="logtype"
          getData={attachData}
        />
        <FormItem
          type="password"
          placeholder="Password"
          name="password"
          getData={attachData}
        />
        {authData.authenticating ? (
          <PrimaryBtn disabled={true}>Logging...</PrimaryBtn>
        ) : (
          <PrimaryBtn
            disabled={
              data.logtype === "" || data.password === "" ? true : false
            }
          >
            Log In
          </PrimaryBtn>
        )}
        {(authData &&
          authData?.authenticationError &&
          authData?.authenticationError.status === 404) ||
          (authData?.authenticationError.status === 401 && (
            <ErrorLabel>{authData?.authenticationError.msg}</ErrorLabel>
          ))}
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
