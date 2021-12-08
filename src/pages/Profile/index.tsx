import React, { useEffect, useState } from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { ProfileInfo } from "./components/ProfileInfo";
import { EditProfile } from "./components/EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";
import { IUserRegister } from "../../interfaces/pages/Auth";
import Alert from "@material-ui/lab/Alert";
import makeApiRequest from "../../services/makeApiRequest";

const Profile = () => {
  const token = useSelector<RootState>((state) => state?.auth?.token);
  const profile_Id = useSelector<RootState>((state) => state?.auth?.user_id);
  const [profileData, setProfileData] = useState<IUserRegister>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    country: "",
    state: "",
  });
  const [alertValue, setAlertValue] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [isAlert, setIsAlert] = useState<Boolean>(false);
  // const [data, loading] = useFetch("getpoile")
  const getUsersProfile = async () => {
    try {
      const { data } = await makeApiRequest(
        `getprofile/${profile_Id}`,
        "GET",
        {},
        token
      );
      setProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onImageUpload = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("myImage", file);
      await makeApiRequest(`upload/${profile_Id}`, "POST", formData, token);
      setAlertValue("success");
      setIsAlert(true);
      getUsersProfile();
    } catch (error) {
      setAlertValue("error");
      setIsAlert(true);
    } finally {
      setTimeout(() => {
        setIsAlert(false);
      }, 1000);
    }
  };
  const UpdateProfile = async (values: IUserRegister) => {
    try {
      const { data } = await makeApiRequest(
        `updateprofile/${profile_Id}`,
        "POST",
        values,
        token
      );
      setProfileData(data);
      getUsersProfile();
    } catch (error) {}
  };

  useEffect(() => {
    getUsersProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isAlert && (
        <Alert severity={alertValue}>File is uploaded Successfully</Alert>
      )}
      <FlexDiv style={{ marginTop: 40 }} justify="space-between">
        <ProfileInfo profile={profileData} onImageUpload={onImageUpload} />
        <EditProfile profile={profileData} updateProfile={UpdateProfile} />
      </FlexDiv>
    </>
  );
};

export { Profile };
