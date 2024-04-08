const { sign } = require('crypto')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},

  //  fontSize:{
  //   'sm': '10px',
  //   'x': '20px',

  //  },



  //  fontWeight:{
  //     'hairline': 100,
  //     'thin': 200,
  //     'light': 300,
  //     'normal': 400,
  //     'medium': 500,
  //     'semibold': 600,
  //     'bold': 700,
  //     'extrabold': 800,
  //     'black': 900,
  //  },

  //  lineHeight: {
  //   '21': '21.68px',
  // },


  colors: {
    bg: {
      '100': '#F2F2F2',
    },
    navbar: {
      'text': '#FFFFFF',
      'stroke': '#979797',
      'bg': '#373F68',
      'sort': '#F2F4FE',
      'most': '#FFFFFF',
      'logo': '#FFFFFF',
      'suggestion': '#AD1FEA',
      'btn-bg': '#AD1FEA',
      'btn-color': '#F2F4FE',
    },
    card: {
      'counter-btn-bg': '#F2F4FE',
      'counter-arrow-stroke': '#4661E6',
      'counter-btn-text': '#3A4374',
      'card-head-text': '#3A4374',
      'card-para-text': '#647196',
      'card-btn-bg': '#F2F4FF',
      'card-btn-text': '#4661E6',
      'card-comment-num-text': '#3A4374',
      'card-comment-logo-bg': '#CDD2EE',
      'card-bg': '#FFFFFF',
    },
    sidebar: {
      'first-head-text': '#FFFFFF',
      'first-para-text': '#FFFFFF',
      'second-All-btn-bg': '#4661E6',
      'second-All-text': '#FFFFFF',
      'second-btn-bg': '#F2F4FF',
      'second-text': '#4661E6',
      'second-bg': '#FFFFFF',
      'third-roadmap-text': '#3A4374',
      'third-view-text': '#4661E6',
      'third-PlanProgLive-text': '#647196',
      'third-numbers-text': '#647196',
      'third-bg': '#FFFFFF',
      'planned-bg': '#F49F85',
      'in-progress': '#AD1FEA',
      'live': '#62BCFA',
    },
  },
  fontFamily: {
    'Jost': ['Jost', 'sans-serif'],
  },
  fontSize: {
    '13': '13px',
    '14': '14px',
    '15': '15px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
  },
  fontWeight: {
    'bold': 'bold',
    'medium': '500',
    'semiBold': '600',
    'regular': '400',
  },




  },
  plugins: [],
}

