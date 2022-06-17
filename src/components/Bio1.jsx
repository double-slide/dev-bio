import { Card, Center, Grid, Text, Title, Space } from '@mantine/core';

function Bio1() {
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

          <Grid.Col span={7}>
          <Space h='lg'/>
          <Space h='lg'/>


            <Title
              component="span"
              align="center"
              // variant="gradient"
              weight={700}
              style={{ fontFamily: 'Greycliff CF, sans-serif' }}
            >
              Hi, my name is <Text color="red" inherit component="span">Iaan</Text>.
            </Title>

            <Space h='lg'/>
            <Space h='lg'/>

            <Title>
              I’m a full stack web developer.
            </Title>



          </Grid.Col>
          <Grid.Col span={2}>

          </Grid.Col>
          <Grid.Col span={3}>

            <Center>
              <img
                // caption='Iaan'
                width={200}
                radius={50}
                style={{ margin: 20 }}
component='a'
                src='https://media-exp1.licdn.com/dms/image/C5603AQHwuNX81FzwEQ/profile-displayphoto-shrink_800_800/0/1646859896622?e=1660176000&v=beta&t=R7Qb7oLtUb6GhcM8gpE9tiQ2jbMiB_7R5f9G-eHfXos'
                alt='headshot'
              />
            </Center>


          </Grid.Col>
        </Grid>
      </Card>

    </>
  );
}

export default Bio1;