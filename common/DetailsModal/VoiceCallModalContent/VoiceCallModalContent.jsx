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
import { FaVoicemail } from "react-icons/fa";

import { VscVerified } from "react-icons/vsc";

export const VoiceCallModalContent = () => {
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
                as={FaVoicemail}
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
              Voice
            </Text>
          </HStack>

          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem colSpan={1}>
              <Text fontWeight="800"> To make call</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" color="#1A202C">
                  Starts at
                </Text>
                <Text color="#1A202C" fontWeight="700" wordBreak>
                  AED 0.00184 /sms
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontWeight="800"> To Receive Call</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" fontWeight="800" color="#808080">
                  Not Available
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
        <Box
          mt={{ base: "", md: "", lg: "", xl: 6 }}
          height={0.2}
          backgroundColor="#1A202C"
        />
      </Box>
      <Flex
        mt={{ base: "", md: "", lg: "", xl: 14 }}
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
                    Local Call (Outbound)
                  </Text>{" "}
                </HStack>

                <Stack px={7}>
                  <Text
                    color="#4F4F4F"
                    fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                  >
                    This refers to Outgoing voice calls from the business mobile
                    number to the customers.
                  </Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text></Text>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                  fontWeight="700"
                >
                  XCD
                </Text>
                <Text
                  color="#1A202C"
                  fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                  fontWeight="700"
                  wordBreak
                >
                  0.00184 /sms
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Flex>
    </Flex>
  );
};
