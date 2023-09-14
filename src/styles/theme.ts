export default {
  grid: {
    container: '950px',
    gutter: '16px'
  },
  font: {
    family: "",
    regular: 400,
    medium: 500,
    semiBold: 600,
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
      huge: '40px'
    }
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    grey: '#707372',
    disable: '#DFDEDE',
    link: '#4D6EDB',
    main: '#fff000'
  },
  spacings: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
} as const
