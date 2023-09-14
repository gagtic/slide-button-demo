import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "../types";

export const returnRandomProfiles = (length: number) => {
  let returnArr: Profile[] = [];
  for (let i = 0; i < length; i++)
    returnArr.push({
      id: makeId(10),
      name: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      location: faker.location.city(),
      photo: faker.image.avatar(),
    });
  return returnArr;
};

/**
 *
 * @param lengthOfId length of id to return
 * @returns random ID made from A-z 0-9 Symbols
 */
export const makeId = (lengthOfId: number) => {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < lengthOfId; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  };
