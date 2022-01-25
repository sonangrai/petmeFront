import { LoginForm, TheForm } from "../../login/loginform/Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";
import { ErrorLabel } from "../../../forms/form.styled";
import { registerApi } from "../../../../redux/api/auth";
import Router from "next/router";

const Registerform = () => {
  const [signing, setSigning] = useState(false);
  const [error, setError] = useState();
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
    setSigning(true);
    registerApi(data).then(
      (res) => {
        setSigning(false);
        Router.push("/verify");
      },
      (err) => {
        setSigning(false);
        setError(err.response);
      }
    );
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
        {signing ? (
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
        {error &&
          error?.status === 400 &&
          error.data.data.map((er, i) => (
            <ErrorLabel key={i + "er"}>{er.msg}</ErrorLabel>
          ))}
        {error && error?.status !== 400 && (
          <ErrorLabel>{error.data.msg}</ErrorLabel>
        )}
      </TheForm>
    </LoginForm>
  );
};

export default Registerform;
