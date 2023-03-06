import { Container, Group, Header, Image } from '@mantine/core';

export function AppHeader() {
  return (
    <Header height={56}>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Group>
          <Image
            src="https://kutt.it/images/favicon-196x196.png"
            width={32}
            height={32}
          />
        </Group>
      </Container>
    </Header>
  );
}
