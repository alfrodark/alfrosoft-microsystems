import { EstimateButton } from './../../../ui/EstimateButton/index'
import { Grid, Typography } from '@mui/material'
import LearnMoreButton from '../../../ui/LearnMoreBtn'

const HeroTypography = () => {
  return (
    <Grid md={6} item>
      <Typography variant='h2' textAlign={'center'}>
        Building Next Generation Apps <br /> Using Cutting Edge Technologies.
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems={'center'}
        sx={{
          marginTop: '1em',
        }}
      >
      <Grid item>
        <EstimateButton />
      </Grid>
      <Grid item>
        <LearnMoreButton link='' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HeroTypography
