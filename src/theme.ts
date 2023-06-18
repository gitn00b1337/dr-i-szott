import { extendTheme, StyleFunctionProps, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

// theme colours for easier memory!
const JET = '#333333';
const MINT = '#47B27A'; // light & bright
const BRUNSWICK_GREEN = '#004432'; // medium
const PINE_GREEN = '#13735F'; // dark
const CITRINE_YELLOW = '#E6CE00';

export const ThemeColors = {
  jet: JET,
  mint: MINT,
  brunswick: BRUNSWICK_GREEN,
  pine: PINE_GREEN,
  yellow: CITRINE_YELLOW,
}

const theme: ThemeOverride = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "'Lato', sans-serif",
        color: JET,
        bg: '#fff'
        // bg: mode('#f7f7f7', '#f7f7f7')(props),
      },
    }),
  },
  brand: {
    100: '#fff',
    200: CITRINE_YELLOW,
    300: MINT,
    400: BRUNSWICK_GREEN,
    500: PINE_GREEN,
    600: JET,
  },
  colors: {
    background: '#f7f7f7'
  },
  textStyles: {
    pageHeader: {
      color: JET,
      fontSize: ['48px', '60px'],
      lineHeight: '110%',
      letterSpacing: '4px',
      fontWeight: '300',
    },
    pageSubHeader: {
      color: PINE_GREEN,
      fontSize: ['21px', '27px'],
      
    },
    sectionHeader: {
      color: PINE_GREEN,
      fontSize: ['21px', '27px'],
      letterSpacing: '2px',
    },
    captionHeader: {
      color: JET,
      
    },
    captionText: {
      color: JET,
    },
    smHeader: {
      color: MINT,
      fontWeight: '700',
      letterSpacing: '2px',
    },
    smFocused: {
      fontWeight: '700',
      letterSpacing: '2px',
    }
  },
  components: {
    Button: {
      baseStyle: {
        background: ''
      }
    },
    Heading: {
      baseStyle: {
        color: JET,
      },
      sizes: {
        base: {

        },

      }
    }
  },
};

export default extendTheme(theme);