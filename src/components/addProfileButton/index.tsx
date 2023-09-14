import { Feather, AntDesign } from "@expo/vector-icons";
import React, { FC, useEffect, useRef } from "react";
import { Pressable, View, StyleSheet, Animated, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../util/responsive";
import { marginViewHorizontal } from "../../util/margins";
import {
  COMPOSE_ICON_SIZE,
  FINAL_POSITION_DISPLACEMENT,
  INITIAL_POSITION_DISPLACEMENT,
  SECONDARY_COLOR,
} from "./constants";

interface ICreateProfile {
  isShown: boolean;
}

const CreatePostButton: FC<ICreateProfile> = ({ isShown }) => {
  const translation = useRef(
    new Animated.Value(INITIAL_POSITION_DISPLACEMENT)
  ).current;

  useEffect(() => {
    animateButton();
  }, [isShown]);

  const animateButton = () =>
    Animated.timing(translation, {
      toValue: isShown
        ? INITIAL_POSITION_DISPLACEMENT
        : FINAL_POSITION_DISPLACEMENT,
      duration: 100,
      useNativeDriver: true,
    }).start();

  return (
    <Animated.View
      style={[styles.touch, { transform: [{ translateY: translation }] }]}
    >
      <Pressable style={styles.touch}>
        <View style={styles.container}>
          <Feather
            name="user-plus"
            size={COMPOSE_ICON_SIZE}
            color={SECONDARY_COLOR}
          />
          {marginViewHorizontal(1.5)}
          <Text style={styles.text}>{"Add Profile"}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  touch: {
    position: "absolute",
    bottom: heightPercentageToDP(1.5),
    alignSelf: "center",
    zIndex: 10000,
  },
  container: {
    backgroundColor: "#1B1B1D",
    borderColor: SECONDARY_COLOR,
    borderWidth: 2,
    borderRadius: widthPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2),
    paddingVertical: heightPercentageToDP(0.5),
    flexDirection: "row",
    alignItems: "center",
  },
  text: { color: SECONDARY_COLOR },
});

export default CreatePostButton;
