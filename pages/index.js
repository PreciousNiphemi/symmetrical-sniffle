import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Flex,
  Text,
  Box,
  Container,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Select from "react-select";
import { PricingCard, DetailsModal } from "../common";
import {
  countriesState,
  countryListState,
  countryCurrenciesState,
} from "../atoms";

export default function Home() {
  const toast = useToast();
  const [countries, setCountries] = useRecoilState(countriesState);
  const currencies = useRecoilValue(countryCurrenciesState);
  const country = useRecoilValue(countryListState);

  const options = [];
  const countryOptions = [];

  currencies.map((currency) => {
    return options.push({ value: currency, label: currency });
  });

  country?.map((countryName) => {
    return countryOptions.push({ value: countryName, label: countryName });
  });

  const getCountries = async () => {
    await fetch("https://api.sendchamp.com/api/v1/core/country")
      .then((response) => response.json())
      .then((response) => setCountries(response.data))
      .catch((err) => {
        toast({
          title: "Error Message",
          description: "Something went wrong. Please try again",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    getCountries();
    // console.log(currencies, "inside useEffect");
  }, []);

  console.log(countryOptions, "before return");

  return (
    <Flex
      flex="1"
      padding={4}
      flexDir="column"
      minHeight="100vh"
      justifyContent="center"
      backgroundColor="#e4e4e4"
    >
      <Container maxW="xl" centerContent>
        <Stack spacing="6">
          <Text
            fontWeight="700"
            textAlign="center"
            color="rgb(3, 13, 70)"
            fontSize={{ base: "", md: "", lg: "", xl: "36px" }}
          >
            Sendchamp Pricing
          </Text>

          <Box px={{ base: "", md: "", lg: "", xl: "90px" }}>
            <Text color="gray" textAlign="center">
              Start with our competitive pay-as-you-go pricing. For deeper
              discounts on committed spend as you scale, talk with our sales
              team.
            </Text>
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="8"
            alignSelf="center"
          >
            <Box minWidth="200px">
              <Select
                size="lg"
                options={countryOptions}
                placeholder="Select Country"
                backgroundColor="#fff"
              />
            </Box>
            <Box minWidth="200px">
              <Select
                size="lg"
                options={options}
                placeholder="Select Currency"
                backgroundColor="#fff"
              />
            </Box>
          </Stack>
          <Text textAlign="center">
            Select Country and Currency to get Pricing
          </Text>
        </Stack>
      </Container>
      <DetailsModal />
      {/* <Flex justifyContent="center" alignSelf="center" width="100%">
        <Wrap
          justify="center"
          spacing={{ base: "4", md: "", lg: "", xl: "8" }}
          marginTop={{ base: "4", md: "", lg: "", xl: "8" }}
        >
          <WrapItem>
            <PricingCard />
          </WrapItem>
          <WrapItem>
            <PricingCard />
          </WrapItem>
          <WrapItem>
            <PricingCard />
          </WrapItem>
          <WrapItem>
            <PricingCard />
          </WrapItem>
          <WrapItem>
            <PricingCard />
          </WrapItem>
        </Wrap>
      </Flex> */}
    </Flex>
  );
}
