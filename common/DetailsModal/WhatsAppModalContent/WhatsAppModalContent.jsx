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
import { BsWhatsapp } from "react-icons/bs";

import { VscVerified } from "react-icons/vsc";

export const WhatsAppModalContent = ({ whatsAppData, code }) => {
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
                as={BsWhatsapp}
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
              WhatsApp
            </Text>
          </HStack>

          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
          >
            <GridItem colSpan={1}>
              <Text fontWeight="800"> To Send Message</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" color="#1A202C">
                  Starts at
                </Text>
                <Text color="#1A202C" fontWeight="700" wordBreak>
                  {`${code} ${whatsAppData?.data?.template} /msg`}
                </Text>
              </Stack>
            </GridItem>
            <GridItem colSpan={1}>
              <Text fontWeight="800"> To Recieve Message</Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Stack my="auto">
                <Text fontSize="14" fontWeight="800">
                  {`${code}  0.00000 /msg`}
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
          <Stack spacing="4">
            <HStack>
              {" "}
              <Icon as={VscVerified} color="#1C9A30" width={5} height={5} />
              <Text
                color="#1A202C"
                fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                fontWeight="700"
              >
                {" "}
                Domestic Route (Non DND)
              </Text>{" "}
            </HStack>
            <Stack>
              <Grid
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
              >
                <GridItem colSpan={2}>
                  <Stack my="auto">
                    <Stack px={7}>
                      <Text
                        fontSize={{ base: "", md: "", lg: "", xl: "14" }}
                        fontWeight={600}
                      >
                        Inbound Messages
                      </Text>
                      <Box px={{ base: "", md: "", lg: "", xl: 3 }}>
                        <Text
                          color="#4F4F4F"
                          fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                        >
                          These are messages recieved by the business from the
                          customers.
                        </Text>
                      </Box>
                    </Stack>
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
                      {`0.00000 /msg`}
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem colSpan={2}>
                  <Stack my="auto">
                    <Stack px={7}>
                      <Text
                        fontSize={{ base: "", md: "", lg: "", xl: "14" }}
                        fontWeight={600}
                      >
                        Outbound Messages
                      </Text>
                      <Box px={{ base: "", md: "", lg: "", xl: 3 }}>
                        <Text
                          color="#4F4F4F"
                          fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                        >
                          These are messages recieved by the business from the
                          customers.
                        </Text>
                      </Box>
                    </Stack>
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
                      {` ${whatsAppData?.data?.template} /msg`}
                    </Text>
                  </Stack>
                </GridItem>
                <GridItem colSpan={2}>
                  <Stack my="auto">
                    <Stack px={7}>
                      <Text
                        fontSize={{ base: "", md: "", lg: "", xl: "14" }}
                        fontWeight={600}
                      >
                        Template Message
                      </Text>
                      <Box px={{ base: "", md: "", lg: "", xl: 3 }}>
                        <Text
                          color="#4F4F4F"
                          fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                        >
                          These are structured and approved messsages by
                          Meta(Facebook) from the business to the customer
                        </Text>
                      </Box>
                    </Stack>
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
                      {`${whatsAppData?.data?.template} /msg`}
                    </Text>
                  </Stack>
                </GridItem>
              </Grid>
            </Stack>
          </Stack>

          <Stack spacing="4">
            <HStack>
              {" "}
              <Icon as={VscVerified} color="#1C9A30" width={5} height={5} />
              <Text
                color="#1A202C"
                fontSize={{ base: "", md: "", lg: "", xl: "18" }}
                fontWeight="700"
              >
                {" "}
                Domestic Route (Non DND)
              </Text>{" "}
            </HStack>
            <Stack>
              <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
              >
                <GridItem colSpan={2}>
                  <Stack my="auto">
                    <Stack px={7}>
                      <Text
                        color="#4F4F4F"
                        fontSize={{ base: "", md: "", lg: "", xl: "12" }}
                      >
                        Subscriptions are NEED BASED.
                      </Text>
                      <Text fontSize={{ base: "", md: "", lg: "", xl: "14" }}>
                        AVALABLE AT MOBILE NUMBER ACTIVATION
                      </Text>
                    </Stack>
                  </Stack>
                </GridItem>
                <GridItem colSpan={1}>
                  <Box />
                </GridItem>
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
