export const getSmsDetails = async (
  variant,
  countryCode,
  currencyCode,
  setSmsStateDetails,
  setApiResponseFailureState,
  setApiResponseSuccessState,
  setUnAvailableStateDetails
) => {
  // https://api.sendchamp.com/api/v1/voice/charges/AE/AFN

  if (variant) {
    await fetch(
      `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setApiResponseSuccessState(true);
          setSmsStateDetails(response.data);
        } else if (response.code === 500) {
          setUnAvailableStateDetails(true);
        }
      })
      .catch((err) => {
        console.log(err);
        // only setting this here because if one fails then the rest also fails.
        setApiResponseFailureState(true);
      });
  }
};

export const getVariantDetails = (varaint, countryCode, currencyCode) => {};
