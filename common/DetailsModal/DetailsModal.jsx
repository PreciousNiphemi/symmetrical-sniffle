import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import { EmailModalContent } from "./EmailModalContent";
import { SmsModalContent } from "./SmsModalContent";
import { VoiceCallModalContent } from "./VoiceCallModalContent";
import { WhatsAppModalContent } from "./WhatsAppModalContent";
import { VerificationModalContent } from "./VerificationModalContent";

export const DetailsModalContent = (props) => {
  switch (props.variant) {
    case "SMS":
      return <SmsModalContent />;
    case "Voice":
      return <VoiceCallModalContent />;
    case "Email":
      return <EmailModalContent />;
    case "Whatsapp":
      return <WhatsAppModalContent />;
    case "Verification":
      return <VerificationModalContent />;

    default:
      return;
  }
};

export const DetailsModal = ({ isOpen, onClose, variant }) => {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <DetailsModalContent
              {...(variant
                ? variant === "SMS"
                  ? {
                      variant: variant,
                      data: "hello",
                    }
                  : variant === "Voice"
                  ? {
                      variant: variant,
                      data: "what",
                    }
                  : variant === "Email"
                  ? {
                      variant: variant,
                      data: "duu",
                    }
                  : variant === "Whatsapp"
                  ? {
                      variant: variant,
                      data: "omo",
                    }
                  : variant === "Verification"
                  ? {
                      variant: variant,
                      data: "blah",
                    }
                  : null
                : null)}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
