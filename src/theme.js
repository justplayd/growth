// import font from './assets/fonts/e-Ukraine-Light.woff';

const fontFamily = {
	fontFamily: 'Arial',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400
	/* src: `
	    local('e-Ukraine'),
	    local('Re-Ukraine-Light'),
	    url(${font}) format('woff')
	`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF' */
};

export default {
	breakpoints: {
		step: 0,
		keys: [
			'xs',
			'sm',
			'md',
			'lg',
			'xl'
		],
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	},
	direction: 'ltr',
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [fontFamily]
			}
		}
	},
	palette: {
		common: {
			black: '#000',
			white: '#fff'
		},
		type: 'light'
	},
	props: {
		MuiTab: {
			disableRipple: true
		}
	},
	spacing: 8,
	transitions: {
		easing: {
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
		},
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195
		}
	},
	zIndex: {}
};
