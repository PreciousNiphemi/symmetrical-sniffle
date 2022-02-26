import {
  Box,
  Icon,
  Grid,
  Flex,
  Text,
  Stack,
  HStack,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { VscVerified } from "react-icons/vsc";

export const VerificationModalContent = ({ verifiedData, code }) => {
  return (
    <Flex flexDir="column" paddingX={2} paddingY={9}>
      <Box>
        <Flex justifyContent="space-between">
          <HStack spacing="3">
            <Button
              width={10}
              height={10}
              borderRadius="12px"
              backgroundColor="rgba(0, 128, 252, 0.3)"
            >
              <Icon
                as={FiCheckCircle}
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
              Verification
            </Text>
          </HStack>

          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem colSpan={1}>
              <Text fontWeight="800"> To Send OTP</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" color="#1A202C">
                  Starts at
                </Text>
                <Text color="#1A202C" fontWeight="700" wordBreak>
                  {`${code}  0.00000 /token`}
                </Text>
              </Stack>
            </GridItem>

            <GridItem colSpan={1}>
              <Text fontWeight="800"> To Confirm OTP</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" color="#1A202C">
                  Starts at
                </Text>
                <Text color="#1A202C" fontWeight="700" wordBreak>
                  {`${code} ${verifiedData?.data?.charge} /token`}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
        <Box mt={{ base: 4, xl: 6 }} height={0.2} backgroundColor="#1A202C" />
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
                    To Send OTP
                  </Text>{" "}
                </HStack>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                >
                  This refers to the charge of sending OTP via different
                  channels.
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
                  {`0.00000 /token`}
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
                    To Confirm OTP
                  </Text>{" "}
                </HStack>

                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                >
                  This refers to the charge for confirming OTP generated on the
                  sendchamp platform.
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
                  {`${verifiedData?.data?.charge} /token`}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </Flex>
  );
};
