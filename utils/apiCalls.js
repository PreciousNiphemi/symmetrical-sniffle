export const getApiDataDetails = async (
  variant,
  countryCode,
  currencyCode,
  setSmsApiResponseStateDetails,
  setVoiceApiResponseStateDetails,
  setEmailApiResponseStateDetails,
  setWhatsappApiResponseStateDetails,
  setVerificationApiResponseStateDetails
) => {
  switch (variant) {
    case "SMS":
      return await fetch(
        `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
      )
        .then((response) => response.json())
        .then((response) => {
          setSmsApiResponseStateDetails(response);
        })
        .catch((err) => {
          console.log(err);
        });
    case "Voice":
      return await fetch(
        `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
      )
        .then((response) => response.json())
        .then((response) => {
          setVoiceApiResponseStateDetails(response);
        })
        .catch((err) => {
          console.log(err);
        });
    case "Email":
      return await fetch(
        `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
      )
        .then((response) => response.json())
        .then((response) => {
          setEmailApiResponseStateDetails(response);
        })
        .catch((err) => {
          console.log(err);
        });
    case "Whatsapp":
      return await fetch(
        `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
      )
        .then((response) => response.json())
        .then((response) => {
          setWhatsappApiResponseStateDetails(response);
        })
        .catch((err) => {
          console.log(err);
        });
    case "Verification":
      return await fetch(
        `https://api.sendchamp.com/api/v1/${variant.toLowerCase()}/charges/${countryCode}/${currencyCode}`
      )
        .then((response) => response.json())
        .then((response) => {
          setVerificationApiResponseStateDetails(response);
        })
        .catch((err) => {
          console.log(err);
        });

    default:
      return;
  }
};
