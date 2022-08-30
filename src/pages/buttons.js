import { Button, Text, Stack } from '../components';

export default function ButtonsPage() {
  return (
    <Stack direction="column" spacing="s4">
      {['l', 'm', 's', 'xs'].map((size) => (
        <Stack direction="row" spacing="l1" alignment="center" key={size}>
          <Text variant="MBold">Size {size.toUpperCase()}</Text>
          <Stack direction="column" spacing="s4">
            <Stack direction="row" spacing="s3">
              {[
                'primary',
                'secondary',
                'tertiary',
                'danger',
                'warning',
                'success',
                'attention',
              ].map((apperiance) => (
                <Button apperiance={apperiance} size={size} key={apperiance}>
                  Action
                </Button>
              ))}
              <Button apperiance="primary" size={size} disabled>
                Action
              </Button>
            </Stack>
            <Stack direction="row" spacing="s3">
              {[
                'primary',
                'secondary',
                'tertiary',
                'danger',
                'warning',
                'success',
                'attention',
              ].map((apperiance) => (
                <Button
                  apperiance={apperiance}
                  size={size}
                  leftIcon="plus"
                  key={apperiance}
                >
                  Action
                </Button>
              ))}
              <Button apperiance="primary" size={size} disabled leftIcon="plus">
                Action
              </Button>
            </Stack>
            <Stack direction="row" spacing="s3">
              {[
                'primary',
                'secondary',
                'tertiary',
                'danger',
                'warning',
                'success',
                'attention',
              ].map((apperiance) => (
                <Button
                  apperiance={apperiance}
                  size={size}
                  rightIcon="arrowRight"
                  key={apperiance}
                >
                  Action
                </Button>
              ))}
              <Button apperiance="primary" size={size} disabled leftIcon="plus">
                Action
              </Button>
            </Stack>
            <Stack direction="row" spacing="s3">
              {[
                'primary',
                'secondary',
                'tertiary',
                'danger',
                'warning',
                'success',
                'attention',
              ].map((apperiance) => (
                <Button
                  apperiance={apperiance}
                  size={size}
                  variant="icon"
                  leftIcon="heartOutline"
                  isIconOnly
                  aria-label="Like"
                />
              ))}
              <Button
                apperiance="primary"
                size={size}
                variant="icon"
                leftIcon="heartOutline"
                isIconOnly
                aria-label="Like"
                disabled
              />
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
