import {
  FormHint,
  FormLabel,
  Input,
  InputRadio,
  RadioItem,
  RadioLabel,
  RadioRow,
} from "../../../forms/form.styled";
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
    bio: "",
    gender: "",
    dob: "",
    hidenumber: "true",
  });

  const { firstname, lastname, address, contact, bio, dob, hidenumber } = data;

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
          <FormLabel>Biography</FormLabel>
          <Input name="bio" value={bio} onChange={onchange} />
        </PfItem>
        <PfItem>
          <FormLabel>Gender</FormLabel>
          <RadioRow>
            <RadioItem>
              <InputRadio
                type="radio"
                name="gender"
                id="genderMale"
                value="male"
                defaultValue="Male"
                onChange={onchange}
              />
              <RadioLabel htmlFor="genderMale">Male</RadioLabel>
            </RadioItem>
            <RadioItem>
              <InputRadio
                type="radio"
                name="gender"
                id="genderFemale"
                value="female"
                defaultValue="Female"
                onChange={onchange}
              />
              <RadioLabel htmlFor="genderFemale">Female</RadioLabel>
            </RadioItem>
            <RadioItem>
              <InputRadio
                type="radio"
                name="gender"
                id="genderOther"
                value="other"
                defaultValue="other"
                onChange={onchange}
              />
              <RadioLabel htmlFor="genderOther">Other</RadioLabel>
            </RadioItem>
          </RadioRow>
        </PfItem>
        <PfItem>
          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" name="dob" value={dob} />
          <FormHint>Don't keep any fake record.</FormHint>
        </PfItem>
        <PfItem>
          <FormLabel>Address</FormLabel>
          <Input name="address" value={address} onChange={onchange} />
          <FormHint>Pleae provide your address which is valid.</FormHint>
        </PfItem>
        <PfItem>
          <FormLabel>Phone</FormLabel>
          <Input name="contact" value={contact} onChange={onchange} />
          <FormHint>Your own on use number.</FormHint>
        </PfItem>
        <PfItem>
          <FormLabel>Contact Visibilty</FormLabel>
          <RadioRow>
            <RadioItem>
              <InputRadio
                type="radio"
                name="hidenumber"
                id="hideNum"
                value="true"
                onChange={onchange}
              />
              <RadioLabel htmlFor="hideNum">Hide</RadioLabel>
            </RadioItem>
            <RadioItem>
              <InputRadio
                type="radio"
                name="hidenumber"
                id="showNum"
                value="false"
                onChange={onchange}
              />
              <RadioLabel htmlFor="showNum">Show</RadioLabel>
            </RadioItem>
          </RadioRow>
        </PfItem>
        <PrimaryBtn>Submit</PrimaryBtn>
      </Pform>
    </ProfileformBox>
  );
};

export default Profileform;
