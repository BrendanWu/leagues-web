import React, { useEffect, useState } from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import { ProfileInfo } from "./components/ProfileInfo";
import { EditProfile } from "./components/EditProfile";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/redux/store";
import axios from "axios";
import { API } from "../../constants";
import { IUserRegister } from "../../interfaces/pages/Auth";

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
  const getUsersProfile = async () => {
    try {
      const { data } = await axios.get(`${API}getprofile/${profile_Id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setProfileData(data);
      // console.log(auth);
    } catch (error) {}
  };
  const onImageUpload = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("myImage", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      };

      await axios.post(`${API}upload/${profile_Id}`, formData, config);
      alert("The file is successfully uploaded");
      getUsersProfile();
    } catch (error) {
      alert("Error Occurred");
    }
  };
  const UpdateProfile = async (values: IUserRegister) => {
    try {
      const { data } = await axios.post(
        `${API}updateprofile/${profile_Id}`,
        values,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(data);
      // console.log(auth);
      getUsersProfile();
    } catch (error) {}
  };
  useEffect(() => {
    getUsersProfile();
  }, []);
  return (
    <FlexDiv style={{ marginTop: 40 }} justify="space-between">
      <ProfileInfo profile={profileData} onImageUpload={onImageUpload} />
      <EditProfile profile={profileData} updateProfile={UpdateProfile} />
    </FlexDiv>
  );
};

export { Profile };
