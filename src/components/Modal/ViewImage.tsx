import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW="900px"
          maxH="632px"
          w="auto"
          h="auto"
          bgColor="pGray.800"
        >
          <ModalBody p={0}>
            <Image src={imgUrl} maxW="900px" maxH="600px" />
          </ModalBody>

          <ModalFooter
            bgColor="pGray.800"
            h="8"
            px="10px"
            py="8px"
            borderRadius="0px 0px 6px 6px"
          >
            <Link
              href={imgUrl}
              isExternal={true}
              fontSize="sm"
              lineHeight="4"
              color="#F3F2F2"
              mr="auto"
            >
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
