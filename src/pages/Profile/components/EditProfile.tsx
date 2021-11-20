import * as React from "react";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { Text } from "../../../react-design-system/Text";
import { Input } from "../../../react-design-system/Input";
import Button from "../../../react-design-system/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { IUserRegister } from "../../../interfaces/pages/Auth";

const EditProfile = (props: {
  profile: IUserRegister;
  updateProfile: (values: IUserRegister) => void;
}) => {
  const { name, phone, email, city, state, country, address } = props?.profile;

  let schema = yup.object().shape({
    name: yup.string().required("Full name is required"),
    phone: yup.number().required("Phone is required").positive().integer(),
    email: yup.string().email("Valid Email is required"),
    city: yup.string(),
    state: yup.string(),
    country: yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      name: name || "",
      email: email || "",
      phone: phone || "",
      city: city || "",
      state: state || "",
      country: country || "",
      address: address || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      props.updateProfile(values);
    },
    validateOnBlur: true,
    validationSchema: schema,
  });

  return (
    <FlexDiv style={{ marginLeft: "5%" }} vert align="flex-start">
      <Text style={{ color: "blueviolet", margin: 20 }}> Profile Update </Text>
      <FlexDiv align="center" justify="space-between">
        {" "}
        <FlexDiv style={{ marginBottom: 20 }} vert>
          {" "}
          <Input
            style={{
              border: "2px solid lightgray",
              borderRadius: 10,
              width: 300,
            }}
            label="Name"
            altTheme
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.email && (
            <div style={{ color: "red", fontSize: 10 }}>
              {formik.errors.name}
            </div>
          )}
        </FlexDiv>
        <FlexDiv style={{ marginLeft: 15, marginBottom: 20 }} vert>
          {" "}
          <Input
            style={{
              border: "2px solid lightgray",
              borderRadius: 10,
              width: 300,
            }}
            label="Email"
            altTheme
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <div style={{ color: "red", fontSize: 10 }}>
              {formik.errors.email}
            </div>
          )}
        </FlexDiv>
      </FlexDiv>
      <FlexDiv justify="space-between">
        <FlexDiv style={{ marginBottom: 20 }} vert>
          <Input
            style={{
              border: "2px solid lightgray",
              borderRadius: 10,

              width: 300,
            }}
            label="Phone Number"
            altTheme
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && (
            <div style={{ color: "red", fontSize: 10 }}>
              {formik.errors.phone}
            </div>
          )}
        </FlexDiv>
        <FlexDiv style={{ marginLeft: 15, marginBottom: 20 }} vert>
          {" "}
          <Input
            style={{
              border: "2px solid lightgray",
              borderRadius: 10,

              width: 300,
            }}
            label="City"
            altTheme
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </FlexDiv>
      </FlexDiv>
      <FlexDiv style={{ marginBottom: 20 }} justify="space-between">
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,

            width: 300,
          }}
          label="Province/State"
          altTheme
          name="state"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,
            marginLeft: 15,
            width: 300,
          }}
          label="Country"
          altTheme
          name="country"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
      </FlexDiv>
      <FlexDiv style={{ marginBottom: 20 }} justify="space-between">
        <Input
          style={{
            border: "2px solid lightgray",
            borderRadius: 10,

            width: 615,
          }}
          label="Address"
          altTheme
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
      </FlexDiv>
      <FlexDiv justify="flex-end" align="flex-end">
        <Button
          onClick={formik.handleSubmit}
          style={{
            color: "blueviolet",
            border: "2px solid lightgray",
            borderRadius: 10,
            backgroundColor: "orange",
            // display: "flex",
            // alignSelf: "center",
            float: "right",
            width: 100,
          }}
          label="Save Changes"
        />{" "}
      </FlexDiv>
    </FlexDiv>
  );
};

export { EditProfile };
