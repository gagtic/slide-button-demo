import React, { useState } from "react";
import { Profile } from "../../types";
import { returnRandomProfiles } from "../../util/profileList";

const useProfileLists = () => {
  const [profileList] = useState<Profile[]>(returnRandomProfiles(20) ?? []);
  const [isCreateButtonShown, setIsCreateButtonShown] = useState<boolean>(true);

  return {
    profileList,
    isCreateButtonShown,
    setIsCreateButtonShown,
  };
};

export default useProfileLists;
