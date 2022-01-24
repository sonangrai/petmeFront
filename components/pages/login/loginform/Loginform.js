import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";
import { useState, useEffect } from "react";

const Loginform = () => {
  const [data, setData] = useState({
    typeAuth: "",
    password: "",
  });

  //Gets data from input and put in state
  const attachData = (n, d) => {
    setData({ ...data, [n]: d });
  };

  return (
    <LoginForm>
      <TheForm>
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
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
