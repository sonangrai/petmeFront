import { LoginForm, TheForm } from "../../login/loginform/Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";
import { ErrorLabel } from "../../../forms/form.styled";

const Registerform = ({ loginDispatch, authData }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
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
          type="email"
          placeholder="Email"
          name="email"
          getData={attachData}
        />
        <FormItem
          type="text"
          placeholder="Username"
          name="username"
          getData={attachData}
        />
        <FormItem
          type="password"
          placeholder="Password"
          name="password"
          getData={attachData}
        />
        {authData.authenticating ? (
          <PrimaryBtn disabled={true}>Registering...</PrimaryBtn>
        ) : (
          <PrimaryBtn
            disabled={
              data.email === "" || data.username === "" || data.password === ""
                ? true
                : false
            }
          >
            Register
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

export default Registerform;
