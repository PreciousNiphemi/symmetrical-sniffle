import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import { EmailModalContent } from "./EmailModalContent";
import { SmsModalContent } from "./SmsModalContent";
import { VoiceCallModalContent } from "./VoiceCallModalContent";
import { WhatsAppModalContent } from "./WhatsAppModalContent";
import { VerificationModalContent } from "./VerificationModalContent";

export const DetailsModalContent = ({ variant, data, code }) => {
  switch (variant) {
    case "SMS":
      return <SmsModalContent smsData={data} code={code} />;
    case "Voice":
      return <VoiceCallModalContent voiceData={data} code={code} />;
    case "Email":
      return <EmailModalContent emailData={data} code={code} />;
    case "Whatsapp":
      return <WhatsAppModalContent whatsAppData={data} code={code} />;
    case "Verification":
      return <VerificationModalContent verifiedData={data} code={code} />;

    default:
      return;
  }
};

export const DetailsModal = ({
  isOpen,
  onClose,
  variant,
  selectedCurrencyCode,
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
                    code: selectedCurrencyCode,
                  }
                : variant === "Voice"
                ? {
                    variant: variant,
                    data: voiceApiResponseStateDetails,
                    code: selectedCurrencyCode,
                  }
                : variant === "Email"
                ? {
                    variant: variant,
                    data: emailApiResponseStateDetails,
                    code: selectedCurrencyCode,
                  }
                : variant === "Whatsapp"
                ? {
                    variant: variant,
                    data: whatsappApiResponseStateDetails,
                    code: selectedCurrencyCode,
                  }
                : variant === "Verification"
                ? {
                    variant: variant,
                    data: verificationApiResponseStateDetails,
                    code: selectedCurrencyCode,
                  }
                : null
              : null)}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
