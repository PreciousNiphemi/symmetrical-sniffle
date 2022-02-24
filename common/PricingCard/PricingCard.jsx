import {
  Box,
  HStack,
  Grid,
  GridItem,
  Stack,
  Flex,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MdChatBubbleOutline } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

export const PricingCard = () => {
  return (
    <Box
      minW="240px"
      minH="240px"
      display="flex"
      borderWidth="1px"
      borderRadius="8px"
      borderColor="#0080fc"
      justifyContent="center"
      backgroundColor="#fff"
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
              as={MdChatBubbleOutline}
              color="rgb(3, 13, 70)"
              width={4}
              height={4}
            />
          </Button>
          <Text>SMS</Text>
        </HStack>

        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem colSpan={1}>
            <Text> To Send SMS</Text>
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
            <Text>To Recieve Call </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text>Not Avaialable</Text>
          </GridItem>
        </Grid>
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
