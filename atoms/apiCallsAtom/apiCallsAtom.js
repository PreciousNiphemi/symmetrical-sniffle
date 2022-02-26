import { atom } from "recoil";

//TODO
// * Restructure atom state to make it easier to debug

export const smsSuccessStateDetails = atom({
  key: "message",
  default: null,
});

export const voiceSuccessStateDetails = atom({
  key: "vocal",
  default: null,
});

export const emailSuccessStateDetails = atom({
  key: "mail",
  default: null,
});

export const whatsappSuccessStateDetails = atom({
  key: "whatsApp",
  default: null,
});

export const verificationStateDetails = atom({
  key: "verified",
  default: null,
});
