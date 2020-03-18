import { createStyles } from '@material-ui/styles';

const backgroundGradient = (firstStop, secondStop) => `linear-gradient(105deg, rgba(255,255,255,1) ${firstStop}, rgba(255,140,2,1) ${secondStop}, rgba(244,87,49,1) 100%)`;

export default ({ spacing, palette, typography, shape, breakpoints }) => createStyles({
  root: {
    display                 : 'flex',
    position                : 'relative',
    alignItems              : 'center',
    width                   : '100%',
    height                  : 600,
    background              : backgroundGradient('65.9%', '66%'),
    [breakpoints.only('xs')]: {
      height    : 250,
      background: backgroundGradient('45.9%', '46%'),
    },
    [breakpoints.only('sm')]: {
      height: 500,
    },
    [breakpoints.only('lg')]: {
      background: backgroundGradient('60.9%', '61%'),
    },
    [breakpoints.only('xl')]: {
      background: backgroundGradient('50.9%', '51%'),
    },
  },
  desktop: {
    zIndex                  : 10,
    marginLeft              : 92,
    marginTop               : 170,
    marginBottom            : 'auto',
    width                   : 475,
    height                  : 50,
    [breakpoints.only('xs')]: {
      display: 'none',
    },
    [breakpoints.only('sm')]: {
      marginLeft: 30,
      marginTop : 70,
      width     : 370,
      '& h2, p' : {
        width: 350,
      },
    },
    [breakpoints.only('md')]: {
      marginLeft: 40,
    },
  },
  mobile: {
    margin          : spacing(2),
    marginTop       : spacing(5),
    marginBottom    : spacing(5),
    '& $prefixTitle': {
      width     : 250,
      lineHeight: 1.2,
    },
    '& $logoIcon': {
      width : 22,
      height: 21,
    },
    '& h1': {
      lineHeight: 1.1,
    },
    '& h2': {
      marginBottom: spacing(2),
    },
    '& p': {
      marginBottom: spacing(2),
    },
    [breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  prefixTitle: {
    display                 : 'flex',
    alignItems              : 'center',
    marginBottom            : spacing(0.5),
    [breakpoints.only('sm')]: {
      width     : 250,
      lineHeight: 1.2,
    },
    [breakpoints.only('xs')]: {
      '& h6': {
        lineHeight: 1.2,
      },
    },
  },
  logoIcon: {
    width                   : 16,
    height                  : 15,
    marginRight             : spacing(0.7),
    [breakpoints.only('sm')]: {
      width : 22,
      height: 21,
    },
  },
  compositionTitle: {
    backgroundColor: palette.common.faintGrey,
    borderRadius   : shape.borderRadius,
    padding        : '0 4px',
  },
  buttonHero: {
    padding      : '8px 32px',
    fontFamily   : typography.fontFamilyOpenSans,
    fontSize     : typography.pxToRem(16),
    letterSpacing: '0.66px',
  },
  image: {
    position                : 'absolute',
    width                   : '40%',
    height                  : 'auto',
    right                   : 92,
    [breakpoints.only('xs')]: {
      width : '80%',
      margin: '0 auto',
      left  : 0,
      right : 0,
    },
    [breakpoints.only('sm')]: {
      right: 30,
    },
    [breakpoints.only('md')]: {
      width: '45%',
      right: 40,
    },
    [breakpoints.only('lg')]: {
      width: '45%',
      right: 150,
    },
    [breakpoints.only('xl')]: {
      width: '36%',
      right: 500,
    },
  },
});