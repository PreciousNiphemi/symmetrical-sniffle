import { atom, selector } from "recoil";

export const successState = atom({
  key: "success",
  default: false,
});

export const failureState = atom({
  key: "failure",
  default: false,
});

export const smsSuccessStateDetails = atom({
  key: "sms",
  default: null,
});

export const voiceSuccessStateDetails = atom({
  key: "voice",
  default: null,
});

export const emailSuccessStateDetails = atom({
  key: "email",
  default: null,
});

export const whatsappSuccessStateDetails = atom({
  key: "whatsapp",
  default: null,
});

export const verificationSuccessStateDetails = atom({
  key: "verification",
  default: null,
});

export const unAvailableState = atom({
  key: "unavailable",
  default: false,
});
