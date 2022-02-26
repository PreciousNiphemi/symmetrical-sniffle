import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Box,
  HStack,
  Grid,
  GridItem,
  Stack,
  Button,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  smsSuccessStateDetails,
  voiceSuccessStateDetails,
  emailSuccessStateDetails,
  whatsappSuccessStateDetails,
  verificationStateDetails,
} from "../../atoms";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { FaVoicemail } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { getApiDataDetails } from "../../utils";
import { DetailsModal } from "../DetailsModal";

export const PricingCard = ({
  variant,
  selectedCurrencyCode,
  selectedCountryCode,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [smsApiResponseStateDetails, setSmsApiResponseStateDetails] =
    useRecoilState(smsSuccessStateDetails);

  const [voiceApiResponseStateDetails, setVoiceApiResponseStateDetails] =
    useRecoilState(voiceSuccessStateDetails);

  const [emailApiResponseStateDetails, setEmailApiResponseStateDetails] =
    useRecoilState(emailSuccessStateDetails);

  const [whatsappApiResponseStateDetails, setWhatsappApiResponseStateDetails] =
    useRecoilState(whatsappSuccessStateDetails);

  const [
    verificationApiResponseStateDetails,
    setVerificationApiResponseStateDetails,
  ] = useRecoilState(verificationStateDetails);

  useEffect(() => {
    if (selectedCountryCode.length > 0 && selectedCurrencyCode.length > 0) {
      getApiDataDetails(
        variant,
        selectedCountryCode,
        selectedCurrencyCode,
        setSmsApiResponseStateDetails,
        setVoiceApiResponseStateDetails,
        setEmailApiResponseStateDetails,
        setWhatsappApiResponseStateDetails,
        setVerificationApiResponseStateDetails
      );
    }
  }, [selectedCountryCode, selectedCurrencyCode]);

  return (
    <>
      <Box
        minW="320px"
        maxWidth="320px"
        minH="300px"
        maxH="300px"
        display="flex"
        borderWidth="1px"
        borderRadius="8px"
        borderColor="#0080fc"
        justifyContent="center"
        backgroundColor="#fff"
        display={
          selectedCountryCode.length > 0 && selectedCurrencyCode.length > 0
            ? "flex"
            : "none"
        }
        padding={{ base: 4, md: 4, lg: 4, xl: 4 }}
      >
        <Stack spacing={4}>
          <HStack spacing="2">
            <Button
              width={10}
              height={10}
              borderRadius="12px"
              backgroundColor="rgba(0, 128, 252, 0.3)"
            >
              <Icon
                as={
                  variant === "Voice"
                    ? FaVoicemail
                    : variant === "Email"
                    ? MdOutlineEmail
                    : variant === "Whatsapp"
                    ? BsWhatsapp
                    : variant === "Verification"
                    ? FiCheckCircle
                    : MdChatBubbleOutline
                }
                color="rgb(3, 13, 70)"
                width={4}
                height={4}
              />
            </Button>
            <Text>{variant}</Text>
          </HStack>

          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1}>
              <Text>
                {variant === "Voice"
                  ? ` To Make Calls`
                  : variant === "Email"
                  ? `Price Per Mail`
                  : variant === "Whatsapp"
                  ? `To Send Message`
                  : variant === "Verification"
                  ? `To Send OTP`
                  : ` To Send ${variant}`}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text>Starts at</Text>
                <Text
                  fontWeight="700"
                  wordBreak
                  color={
                    variant === "Voice"
                      ? voiceApiResponseStateDetails?.code === "500"
                        ? "#808080"
                        : "#000000"
                      : variant === "Email"
                      ? emailApiResponseStateDetails?.code === "500"
                        ? "#808080"
                        : "#000000"
                      : variant === "Whatsapp"
                      ? whatsappApiResponseStateDetails?.code === "500"
                        ? "#808080"
                        : "#000000"
                      : variant === "Verification"
                      ? verificationApiResponseStateDetails?.code === "500"
                        ? "#808080"
                        : "#000000"
                      : variant === "SMS"
                      ? smsApiResponseStateDetails?.code === "500"
                        ? "#808080"
                        : "#000000"
                      : "#000000"
                  }
                >
                  {variant === "Voice"
                    ? voiceApiResponseStateDetails?.code === "500"
                      ? "Not Available"
                      : `${selectedCurrencyCode} ${voiceApiResponseStateDetails?.data?.incoming} /sec`
                    : variant === "Email"
                    ? emailApiResponseStateDetails?.code === "500"
                      ? "Not Available"
                      : `${selectedCurrencyCode} ${emailApiResponseStateDetails?.data?.charge} /mail`
                    : variant === "Whatsapp"
                    ? whatsappApiResponseStateDetails?.code === "500"
                      ? "Not Available"
                      : `${selectedCurrencyCode} ${whatsappApiResponseStateDetails?.data?.template} /msg`
                    : variant === "Verification"
                    ? verificationApiResponseStateDetails?.code === "500"
                      ? "Not Available"
                      : `${selectedCurrencyCode}  0.00000 /token`
                    : variant === "SMS"
                    ? smsApiResponseStateDetails?.code === "500"
                      ? "Not Available"
                      : `${selectedCurrencyCode} ${smsApiResponseStateDetails?.data?.dnd} /sms`
                    : null}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text>
                {variant === "Voice"
                  ? ` To Receive Calls`
                  : variant === "Email"
                  ? ``
                  : variant === "Whatsapp"
                  ? `To Receive Message`
                  : variant === "Verificaiton"
                  ? `To Confirm OTP`
                  : `To Receive ${variant}`}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              {variant === "Voice" ? (
                <Text color="#808080" fontWeight="700">
                  Not Available
                </Text>
              ) : variant === "SMS" ? (
                <Text color="#808080" fontWeight="700">
                  Not Available
                </Text>
              ) : variant === "Email" ? (
                <Text />
              ) : (
                <Stack my="auto">
                  <Text display>Starts at</Text>
                  <Text
                    fontWeight="700"
                    wordBreak
                    color={
                      variant === "Whatsapp"
                        ? whatsappApiResponseStateDetails?.code === "500"
                          ? "#808080"
                          : "#000000"
                        : variant === "Verification"
                        ? verificationApiResponseStateDetails?.code === "500"
                          ? "#808080"
                          : "#000000"
                        : "#000000"
                    }
                  >
                    {variant === "Whatsapp"
                      ? whatsappApiResponseStateDetails?.code === "500"
                        ? "Not Available"
                        : ` ${selectedCurrencyCode} 0.00000 /msg`
                      : variant === "Verification"
                      ? verificationApiResponseStateDetails?.code === "500"
                        ? "Not Available"
                        : `${selectedCurrencyCode} ${verificationApiResponseStateDetails?.data?.charge} /token`
                      : ` Not Available`}
                  </Text>
                </Stack>
              )}
            </GridItem>
          </Grid>
          <HStack
            as="button"
            alignSelf="flex-end"
            cursor="pointer"
            color="#0080fc"
            _hover={{
              textDecoration: "underline",
            }}
            // onClick={onOpen}
            onClick={
              variant === "Voice"
                ? voiceApiResponseStateDetails?.code === "500"
                  ? null
                  : onOpen
                : variant === "Email"
                ? emailApiResponseStateDetails?.code === "500"
                  ? null
                  : onOpen
                : variant === "Whatsapp"
                ? whatsappApiResponseStateDetails?.code === "500"
                  ? null
                  : onOpen
                : variant === "Verification"
                ? verificationApiResponseStateDetails?.code === "500"
                  ? null
                  : onOpen
                : variant === "SMS"
                ? smsApiResponseStateDetails?.code === "500"
                  ? null
                  : onOpen
                : null
            }
          >
            <Text>See more details</Text>
            <Icon as={BsArrowRightShort} width={6} height={6} />
          </HStack>
        </Stack>
      </Box>
      <DetailsModal
        isOpen={isOpen}
        onClose={onClose}
        variant={variant}
        selectedCurrencyCode={selectedCurrencyCode}
        smsApiResponseStateDetails={smsApiResponseStateDetails}
        voiceApiResponseStateDetails={voiceApiResponseStateDetails}
        emailApiResponseStateDetails={emailApiResponseStateDetails}
        whatsappApiResponseStateDetails={whatsappApiResponseStateDetails}
        verificationApiResponseStateDetails={
          verificationApiResponseStateDetails
        }
      />
    </>
  );
};

//TODO
// * Refactor file to prevent headache during debugging
