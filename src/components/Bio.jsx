import { Card, Grid } from '@mantine/core';

function Bio() {
  return (
    <>
    <Grid
    // gutter='xl'
    >
      <Card
      shadow='lg'
      >
        
        <img 
        // caption='Iaan'
        // radius='lg'
        height={100}
        src='https://media-exp1.licdn.com/dms/image/C5603AQHwuNX81FzwEQ/profile-displayphoto-shrink_800_800/0/1646859896622?e=1660176000&v=beta&t=R7Qb7oLtUb6GhcM8gpE9tiQ2jbMiB_7R5f9G-eHfXos' 
        alt='headshot'
        />

      </Card>

    </Grid>
    </>
  );
}

export default Bio;