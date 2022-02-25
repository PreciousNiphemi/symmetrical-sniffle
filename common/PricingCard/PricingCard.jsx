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
} from "@chakra-ui/react";
import {
  successState,
  failureState,
  unAvailableState,
  successStateDetails,
} from "../../atoms";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { FaVoicemail } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { getApiDataDetails } from "../../utils";

export const PricingCard = ({
  variant,
  selectedCurrencyCode,
  selectedCountryCode,
}) => {
  const [apiResponseStateDetails, setApiResponseStateDetails] =
    useRecoilState(successStateDetails);
  const [unAvailableStateDetails, setUnAvailableStateDetails] =
    useRecoilState(unAvailableState);

  const [apiResponseSuccessState, setApiResponseSuccessState] =
    useRecoilState(successState);
  const [apiResponseFailureState, setApiResponseFailureState] =
    useRecoilState(failureState);
  useEffect(() => {
    if (selectedCountryCode.length > 0 && selectedCurrencyCode.length > 0) {
      getApiDataDetails(
        variant,
        selectedCountryCode,
        selectedCurrencyCode,
        setApiResponseStateDetails,
        setApiResponseFailureState,
        setApiResponseSuccessState,
        setUnAvailableStateDetails
      );
    }
  }, [selectedCountryCode, selectedCurrencyCode]);

  return (
    <Box
      minW="340px"
      maxWidth="340px"
      minH="240px"
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
              <Text fontWeight="700" wordBreak>
                AED 0.00184 /sms
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
            <Text>{variant === "Email" ? "" : "Not Available"}</Text>
          </GridItem>
        </Grid>
        {/* To Receive SMS */}
        <HStack
          alignSelf="flex-end"
          cursor="pointer"
          color="#0080fc"
          _hover={{
            textDecoration: "underline",
          }}
        >
          <Text>See more details</Text>
          <Icon as={BsArrowRightShort} width={6} height={6} />
        </HStack>
      </Stack>
    </Box>
  );
};
