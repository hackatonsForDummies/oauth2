module.exports = {
  port: process.env.Port || 5000,
  db: {
    url: 'mongodb://localhost/oauth2',
    mongoConfig: { useNewUrlParser: true, useUnifiedTopology: true },
  },
  secretToken: 'secretkeytoken', // TODO: change
  tokenDuration: 8 // TODO: change (in hours)
}
