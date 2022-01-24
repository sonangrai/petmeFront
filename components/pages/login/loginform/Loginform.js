import { LoginForm, TheForm } from "./Loginform.styled";
import FormItem from "../../../forms/FormItem";

const Loginform = () => {
  return (
    <LoginForm>
      <TheForm>
        <FormItem placeholder="Email or Username" getData={setData} />
      </TheForm>
    </LoginForm>
  );
};

export default Loginform;
