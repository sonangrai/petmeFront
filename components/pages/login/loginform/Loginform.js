import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";

const Loginform = ({ loginDispatch }) => {
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
    console.log(data);
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
        <PrimaryBtn
          disabled={data.logtype === "" || data.password === "" ? true : false}
        >
          Log In
        </PrimaryBtn>
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
