import { Card, Center, Grid, Title, Space, Text } from '@mantine/core';

function Bio2() {
  return (
    <>
      <Card
        shadow='xl'
        style={{ margin: 30 }}
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          '&:hover': {
            backgroundColor: theme.colors.gray[1],
          },
        })}
      >
        <Grid
          gutter='xl'
          style={{ margin: 0 }}

        >
          <Grid.Col span={3}>

            <Center>
              <img
                // caption='Iaan'
                // radius='lg'
                style={{ margin: 20 }}

                height={200}
                src='https://media-exp1.licdn.com/dms/image/C5603AQHwuNX81FzwEQ/profile-displayphoto-shrink_800_800/0/1646859896622?e=1660176000&v=beta&t=R7Qb7oLtUb6GhcM8gpE9tiQ2jbMiB_7R5f9G-eHfXos'
                alt='headshot'
              />
            </Center>


          </Grid.Col>

          <Grid.Col span={1}>

          </Grid.Col>
          <Grid.Col span={8}>




            <Title>
              My previous career as a mechanical engineer brought me close to my current passion:
            </Title>

            <Space h='lg' />

            <Title>
            <Text color="red" inherit component="span">
              Creating web applications
              </Text>
              
            </Title>




          </Grid.Col>
        </Grid>
      </Card>

    </>
  );
}

export default Bio2;