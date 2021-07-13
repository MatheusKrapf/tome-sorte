﻿// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  env: {
    PUBLIC_URL: '/'
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['stg-tomesorte.versatilnow.com.br']
  }
})
