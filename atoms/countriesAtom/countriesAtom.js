import React, { useState, useEffect } from "react";
import { atom, selector } from "recoil";

export const countriesState = atom({
  key: "countriesState",
  default: null,
});

export const countryListState = selector({
  key: "selectedCountry",
  get: ({ get }) => {
    const countryList = get(countriesState);
    const countries = countryList
      ? countryList.map((countryValue) => countryValue.name)
      : null;
    return countries;
  },
});

export const countryCurrenciesState = selector({
  key: "currenciesState",
  get: ({ get }) => {
    const countryCurrencies = get(countriesState);
    const currencies = countryCurrencies
      ? countryCurrencies.map((country) => country.currency)
      : null;
    const currency = new Set(currencies);
    const currencyArray = Array.from(currency);
    return currencyArray;
  },
});

export const selectedCurrencyState = atom({
  key: "selectedCurrency",
  default: "",
});
