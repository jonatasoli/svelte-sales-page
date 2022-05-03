const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
  ],
  purge: {
    content: [
     './src/index.html',
     './src/App.svelte',
     './src/components/Header.svelte',
     './src/components/Introduction.svelte',
     './src/components/Presentation.svelte',
     './src/components/France.svelte',
     './src/components/Card.svelte',
     './src/components/Modules.svelte',
     './src/components/Bonus.svelte',
     './src/components/FeedBacks.svelte',
     './src/components/Price.svelte',
     './src/components/Questions.svelte',
     './src/components/Button.svelte',
     './src/components/Section.svelte',
     './src/components/Warranty.svelte',
     './src/components/Footer.svelte'
    ],
    enabled: production
  },
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('images/Paris-a-noite.webp')",
        'france': "url('images/Rua-em-paris.webp')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      },
      fontSize: {
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      }
    }
  }
};