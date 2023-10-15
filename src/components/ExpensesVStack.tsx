import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });


export default function Elevation() {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={10} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[3].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {'Jasmine Schoch'}
                   <p style={{ color: 'red' }}>You owe $13.93</p>
                </Item>
              ))}
              {[3].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {'Virginia Wang'}
                   <p style={{ color: 'red' }}>You owe $11.28</p>
                </Item>
              ))}
              {[3].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {'Daniel Pak'}
                   <p style={{ color: 'Green' }}>You get back $4.72</p>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
