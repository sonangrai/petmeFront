import { LoginForm, TheForm } from "../../login/loginform/Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";
import { ErrorLabel, SuccessLabel } from "../../../forms/form.styled";
import { activateApi } from "../../../../redux/api/auth";
import Router from "next/router";

const Verifyform = ({ email }) => {
  const [activating, setactivating] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [data, setData] = useState({
    email: email,
    code: "",
  });

  //Gets data from input and put in state
  const attachData = (n, d) => {
    setData({ ...data, [n]: d });
  };

  //Submit form
  const submit = (e) => {
    e.preventDefault();
    setactivating(true);
    activateApi(data).then(
      (res) => {
        setactivating(false);
        setSuccess(res.data);
        setError();
      },
      (err) => {
        setactivating(false);
        setError(err.response);
      }
    );
  };

  return (
    <LoginForm>
      <TheForm onSubmit={submit}>
        <FormItem
          type="number"
          placeholder="Verify Code"
          name="code"
          getData={attachData}
        />
        {activating ? (
          <PrimaryBtn disabled={true}>Verifing...</PrimaryBtn>
        ) : (
          <PrimaryBtn disabled={data.code === "" ? true : false}>
            Verify
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
        {success && <SuccessLabel>{success.msg}</SuccessLabel>}
      </TheForm>
    </LoginForm>
  );
};

export default Verifyform;
