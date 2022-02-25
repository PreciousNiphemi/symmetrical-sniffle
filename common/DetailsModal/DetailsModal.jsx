import {
  Modal,
  Button,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { EmailModalContent } from "./EmailModalContent";
import { SmsModalContent } from "./SmsModalContent";
import { VoiceCallModalContent } from "./VoiceCallModalContent";
import { WhatsAppModalContent } from "./WhatsAppModalContent";
import { VerificationModalContent } from "./VerificationModalContent";

export const DetailsomoModal = (props) => {
  switch (props.variant) {
    case "SMS":
      return <SmsModalContent />;
    case "Voice":
      return <VoiceCallModalContent />;
    case "Email":
      return <EmailModalContent />;
    case "Whatsapp":
      return <WhatsAppModalContent />;
    case "Verificaiton":
      return "hello";

    default:
      return;
  }
};

export const DetailsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VerificationModalContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
