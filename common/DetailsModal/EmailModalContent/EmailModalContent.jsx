import {
  Box,
  Icon,
  Grid,
  Flex,
  Text,
  Stack,
  HStack,
  Button,
  Spacer,
  GridItem,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";

export const EmailModalContent = ({ emailData, code }) => {
  return (
    <Flex flexDir="column" paddingX={2} paddingY={9}>
      <Box>
        <Flex justifyContent="space-between">
          <HStack spacing="3" mr={{ base: 4, md: 0 }}>
            <Button
              width={10}
              height={10}
              borderRadius="12px"
              backgroundColor="rgba(0, 128, 252, 0.3)"
            >
              <Icon
                as={MdOutlineEmail}
                color="rgb(3, 13, 70)"
                width={4}
                height={4}
              />
            </Button>
            <Text
              color="#1A202C"
              fontSize={{ base: "", md: "", lg: "", xl: "24px" }}
              fontWeight="700"
            >
              Email
            </Text>
          </HStack>

          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem colSpan={1}>
              <Text fontWeight="800" wordBreak>
                {" "}
                Price Per Mail
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" color="#1A202C">
                  Starts at
                </Text>
                <Text color="#1A202C" fontWeight="700" wordBreak>
                  {`${code} ${emailData?.data?.charge} /mail`}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
        <Box
          mt={{ base: 6, md: 8, lg: 10, xl: 14 }}
          height={0.2}
          backgroundColor="#1A202C"
        />
      </Box>
      <Flex
        mt={{ base: 6, md: 8, lg: 10, xl: 14 }}
        px={{ base: "", md: "", lg: "", xl: 4 }}
      >
        <Stack spacing="4">
          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem colSpan={2}>
              <Stack my="auto" spacing="4">
                <HStack>
                  {" "}
                  <Icon as={VscVerified} color="#1C9A30" width={5} height={5} />
                  <Text
                    color="#1A202C"
                    fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                    fontWeight="700"
                  >
                    {" "}
                    Pay Per Use
                  </Text>{" "}
                </HStack>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                >
                  Charge for sending a single email whether to a group of
                  customers or to an individual customers.
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                  fontWeight="700"
                >
                  {code}
                </Text>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                  fontWeight="700"
                  wordBreak
                >
                  {` ${emailData?.data?.charge} /mail`}
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem colSpan={2}>
              <Stack my="auto" spacing="4">
                <HStack>
                  {" "}
                  <Icon as={VscVerified} color="#1C9A30" width={5} height={5} />
                  <Text
                    color="#1A202C"
                    fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                    fontWeight="700"
                  >
                    {" "}
                    Subscription
                  </Text>{" "}
                </HStack>

                <Button
                  color="#fff"
                  maxWidth="40"
                  backgroundColor="#1C9A30"
                  _hover={{
                    color: "#fff",
                    backgroundColor: "#1C9A30",
                  }}
                >
                  Coming Soon
                </Button>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text></Text>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                  fontWeight="700"
                  wordBreak
                >
                  ---
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </Flex>
  );
};
