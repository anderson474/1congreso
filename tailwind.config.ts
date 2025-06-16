  import type { Config } from 'tailwindcss'

  const config: Config = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
        'verde': '#96b422',
        'azul': '#305398',
        'morado': '#af4291',
        'amarillo': '#fbba25',
        'naranja': '#f39327',
        'violeta': '#7f5da4',
      },
      },
    },
    plugins: [],
  }
  export default config
