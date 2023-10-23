import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
                fontWeight:600,
                fontSize:'0.875rem',
                textTransform:'capitalize',
                 backgroundColor:'#009be5',
                '&:MuiButton-contained':{
                    backgroundColor:'#009be5',
                },
                '&.MuiButton-outlined': {
                    color:'#fff',
                    borderColor:'#fff',
                    '&:hover':{
                        backgroundColor:'transparent'
                    }
                }
            },
          },
        },
      },
      palette: {
        primary:{
            main:'#bada55'
        }
      },
      typography: {
        h1:{
          fontSize:'1.6rem',
          fontWeight:600,
          color:'#fff',
          letterSpacing:'0.5px',
          textTransform:'capitalize'
        }
    
  },
});