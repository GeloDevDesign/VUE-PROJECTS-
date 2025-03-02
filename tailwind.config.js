/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        body: ['Montserrat'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light", {myTheme: {
          
      "primary": "#00a7ff",
                
      "secondary": "#007900",
                
      "accent": "#fb4300",
                
      "neutral": "#172632",
                
      "base-100": "#31200d",
                
      "info": "#00b3d5",
                
      "success": "#009d00",
                
      "warning": "#f99c00",
                
      "error": "#ff6384",
     }}
  ]
    
  }
}

