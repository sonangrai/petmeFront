import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";

const Loginform = () => {
  return (
    <LoginForm>
      <TheForm>
        <FormItem placeholder="Email or Username" name="typeAuth" getData />
        <FormItem placeholder="Password" name="password" getData />
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
