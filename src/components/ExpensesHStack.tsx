import Stack from '@mui/material/Stack';
import ExpensesVStack from './ExpensesVStack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Define the MyBox component
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

  const lightTheme = createTheme({ palette: { mode: 'light' } });

  export default function Elevation() {
    return (
    <Stack direction="row" spacing={1}>
      <ExpensesVStack />
      <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr' },
                gap: 2,
              }}
            >
              {[3].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {'Money spent this week: $29.21'}
                </Item>
              ))}
              {[3].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {'% of budget used: 58.42%'}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </Stack>
  );
};

