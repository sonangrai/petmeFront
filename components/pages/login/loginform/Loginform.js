import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";

const Loginform = () => {
  const [data, setData] = useState({
    typeAuth: "",
    password: "",
  });

  //Gets data from input and put in state
  const attachData = (n, d) => {
    setData({ ...data, [n]: d });
  };

  //Submit form
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <LoginForm>
      <TheForm onSubmit={submit}>
        <FormItem
          type="text"
          placeholder="Email or Username"
          name="typeAuth"
          getData={attachData}
        />
        <FormItem
          type="password"
          placeholder="Password"
          name="password"
          getData={attachData}
        />
        <PrimaryBtn
          disabled={data.typeAuth === "" || data.password === "" ? true : false}
        >
          Log In
        </PrimaryBtn>
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
