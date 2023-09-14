import React from "react";
import { View } from "react-native";
import { widthPercentageToDP } from "./responsive";

export const marginViewHorizontal = (value: number) => (
  <View style={{ marginStart: widthPercentageToDP(value) }} />
);

export const marginViewVertical = (value: number) => (
  <View style={{ marginTop: widthPercentageToDP(value) }} />
);
