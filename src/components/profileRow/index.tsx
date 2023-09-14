import React, { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../util/responsive";
import { marginViewHorizontal, marginViewVertical } from "../../util/margins";

interface IProfileRow {
  name: string;
  photo: string;
  location: string;
  jobTitle: string;
}

const IMAGE_SIZE = widthPercentageToDP(10);
const FONT_LARGE = widthPercentageToDP(3.5);
const FONT_SMALL = widthPercentageToDP(2.8);

const ProfileRow: FC<IProfileRow> = ({ name, photo, location, jobTitle }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image} />
      {marginViewHorizontal(3)}
      <View>
        <Text style={[styles.text, { fontSize: FONT_LARGE }]}>{name}</Text>
        <Text style={[styles.text, { fontSize: FONT_SMALL }]}>{jobTitle}</Text>
        <Text style={[styles.text, { fontSize: FONT_SMALL }]}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333436",
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(3),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: widthPercentageToDP(2),
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE * 0.2,
  },
  text: {
    color: "white",
  },
});

export default ProfileRow;
