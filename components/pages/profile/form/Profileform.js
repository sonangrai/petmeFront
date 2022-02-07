import { FormHint, FormLabel, Input } from "../../../forms/form.styled";
import { PfItem, Pform, ProfileformBox } from "./Profileform.styled";
import { useState } from "react";
import { PrimaryBtn } from "../../../button/Button.styled";

/**
 *
 * @returns Profile form
 */
const Profileform = ({ auth }) => {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    address: "",
    contact: "",
  });

  const { firstname, lastname, address, contact } = data;

  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <ProfileformBox>
      <Pform onSubmit={onsubmit}>
        <PfItem>
          <FormLabel>Firstname</FormLabel>
          <Input name="firstname" value={firstname} onChange={onchange} />
          <FormHint>
            Be sure to keep your real name. We at Petgram would not like anyone
            to be prentending as pthers.
          </FormHint>
        </PfItem>
        <PfItem>
          <FormLabel>Lastname</FormLabel>
          <Input name="lastname" value={lastname} onChange={onchange} />
          <FormHint>
            Be sure to keep your real family name. We at Petgram would not like
            anyone to be prentending as pthers.
          </FormHint>
        </PfItem>
        <PfItem>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={address} onChange={onchange} />
        </PfItem>
        <PfItem>
          <FormLabel>Phone</FormLabel>
          <Input name="contact" value={contact} onChange={onchange} />
        </PfItem>
        <PrimaryBtn>Submit</PrimaryBtn>
      </Pform>
    </ProfileformBox>
  );
};

export default Profileform;
