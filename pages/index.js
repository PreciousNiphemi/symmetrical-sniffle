import {
  Flex,
  Text,
  Box,
  Container,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import Select from "react-select";
import { PricingCard } from "../common";

export default function Home() {
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
                backgroundColor="#fff"
                placeholder="Select Country"
              />
            </Box>
            <Box minWidth="200px">
              <Select
                size="lg"
                minWidth="200"
                backgroundColor="#fff"
                placeholder="Select Country"
              />
            </Box>
          </Stack>
          <Text textAlign="center">
            Select Country and Currency to get Pricing
          </Text>
        </Stack>
      </Container>

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
    </Flex>
  );
}
