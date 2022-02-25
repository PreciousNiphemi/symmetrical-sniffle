import { atom, selector } from "recoil";

//Need to refractor this whole thing. If they bring light on time

export const successState = atom({
  key: "helloThere",
  default: false,
});

export const failureState = atom({
  key: "holla",
  default: false,
});

export const successStateDetails = atom({
  key: "sms",
  default: null,
});

export const voiceSuccessStateDetails = atom({
  key: "vocal",
  default: null,
});

export const unAvailableState = atom({
  key: "dutch",
  default: false,
});
