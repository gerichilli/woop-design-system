import {
  Button,
  Text,
  Modal,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
} from './components';

export default function ModalPage() {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>Hello TextBase</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction="column" spacing="s3">
            <Text>
              Today, every company I talk to wants to implement a design system
              from scratch. Unfortunately, the details of a design system are
              not explored, so often they are not used to the maximum to create
              a useful user experience.
            </Text>
            <Text>
              New designers can take a look at any of the design patterns listed
              below to learn best practices and make informed design decisions
              on their projects.
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Stack direction="column" spacing="m1">
            <Button apperiance="primary" size="m">
              Primary button
            </Button>
            <Button apperiance="secondary" size="m">
              Secondary buttons
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
