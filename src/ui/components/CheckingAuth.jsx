import { CircularProgress, Grid } from "@mui/material"


export const CheckingAuth = () => {
  return (
    
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "120vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
       >
        <CircularProgress color='warning'/>
       </Grid>
    </Grid>
  )
}
