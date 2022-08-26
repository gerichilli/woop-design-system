import { useState } from 'react';
import './App.scss';
import {
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  Text,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from './components';

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <>
      <button onClick={() => setUseDarkTheme((prev) => !prev)}>
        Dark theme
      </button>
      <Button apperiance="primary" size="l" leftIcon="plusOutline">
        Hello Icon
      </Button>
      <Button
        apperiance="primary"
        size="l"
        variant="icon"
        leftIcon="heartOutline"
        aria-label="Like"
      />
      <Button apperiance="warning" size="s" rightIcon="plusOutline">
        Hello icon
      </Button>
      <Button apperiance="primary" size="l">
        Hello icon
      </Button>

      <Modal>
        <ModalContent>
          <ModalHeader>Hello TextBase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button apperiance="primary" size="l">
              Primary button
            </Button>
            <Button apperiance="secondary" size="l">
              Secondary buttons
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;