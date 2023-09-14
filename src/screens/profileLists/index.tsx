import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { returnRandomProfiles } from "../../util/profileList";
import { Profile } from "../../types";
import ProfileRow from "../../components/profileRow";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../util/responsive";
import { marginViewVertical } from "../../util/margins";
import CreatePostButton from "../../components/addProfileButton";
import useProfileLists from "./useProfileLists";

var currentOffset = 0;

const ProfileList = () => {
  const { profileList, isCreateButtonShown, setIsCreateButtonShown } =
    useProfileLists();
    
  const handleProfileRender = ({ item }: { item: Profile }) => {
    const { name, photo, jobTitle, location } = item;
    return (
      <ProfileRow
        name={name}
        photo={photo}
        jobTitle={jobTitle}
        location={location}
      />
    );
  };

  const handleSeparator = () => marginViewVertical(1.5);

  const handleScroll = (event: any) => {
    const direction =
      event.nativeEvent.contentOffset.y > currentOffset ? "down" : "up";
    currentOffset = event.nativeEvent.contentOffset.y;

    if (direction === "down") {
      const scrolling = event.nativeEvent.contentOffset.y;
      if (scrolling > heightPercentageToDP(5))
        isCreateButtonShown && setIsCreateButtonShown(false);
      else !isCreateButtonShown && setIsCreateButtonShown(true);
    } else {
      const { layoutMeasurement, contentOffset, contentSize } =
        event.nativeEvent;
      const isAtEnd =
        layoutMeasurement.height + contentOffset.y >= contentSize.height;
      !isAtEnd && !isCreateButtonShown && setIsCreateButtonShown(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.childContainer}>
        <Text style={styles.title}>Profile List</Text>
        <CreatePostButton isShown={isCreateButtonShown} />
        {marginViewVertical(2)}
        <FlatList
          data={profileList}
          onScroll={handleScroll}
          renderItem={handleProfileRender}
          ItemSeparatorComponent={handleSeparator}
          style={{
            height: heightPercentageToDP(88),
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  childContainer: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingVertical: heightPercentageToDP(1),
  },
  title: {
    color: "white",
    fontSize: widthPercentageToDP(5),
  },
});

export default ProfileList;
