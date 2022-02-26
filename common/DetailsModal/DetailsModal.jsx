import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import { EmailModalContent } from "./EmailModalContent";
import { SmsModalContent } from "./SmsModalContent";
import { VoiceCallModalContent } from "./VoiceCallModalContent";
import { WhatsAppModalContent } from "./WhatsAppModalContent";
import { VerificationModalContent } from "./VerificationModalContent";

export const DetailsModalContent = ({ variant, data }) => {
  switch (variant) {
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

export const DetailsModal = ({
  isOpen,
  onClose,
  variant,
  smsApiResponseStateDetails,
  voiceApiResponseStateDetails,
  emailApiResponseStateDetails,
  whatsappApiResponseStateDetails,
  verificationApiResponseStateDetails,
}) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <DetailsModalContent
            {...(variant
              ? variant === "SMS"
                ? {
                    variant: variant,
                    data: smsApiResponseStateDetails,
                  }
                : variant === "Voice"
                ? {
                    variant: variant,
                    data: voiceApiResponseStateDetails,
                  }
                : variant === "Email"
                ? {
                    variant: variant,
                    data: emailApiResponseStateDetails,
                  }
                : variant === "Whatsapp"
                ? {
                    variant: variant,
                    data: whatsappApiResponseStateDetails,
                  }
                : variant === "Verification"
                ? {
                    variant: variant,
                    data: verificationApiResponseStateDetails,
                  }
                : null
              : null)}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
