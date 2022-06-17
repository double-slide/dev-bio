import { Card, Center, Grid } from '@mantine/core';

function Bio() {
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

<p>Hi, I’m Iaan. I’m a full stack web developer.</p>

<p>  
My previous career as a mechanical engineer brought me close to my current passion: creating web applications. My experience working in cross-discipline teams taught me how to quickly translate technical jargon into language that is accessible for others.

As an engineer, I’ve always been keen to design products that are easy to use, and easy to service. This philosophy still holds true – I now strive to create quality software experiences for users, and maintainable code for other developers.

During my degree, I used languages like Matlab and C++ to perform calculations. As a working engineer, I used Python, VBA and Matlab to automate tasks and process data.

More recently through my web development diploma, I have delivered projects using JavaScript, React, SQL, Node, Express, Ruby, and Rails.
</p>

<p>
I love collaborating with enthusiastic people, and leveraging technology to create new things!
</p>


          </Grid.Col>
          <Grid.Col span={2}>

          </Grid.Col>
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
        </Grid>
      </Card>

    </>
  );
}

export default Bio;