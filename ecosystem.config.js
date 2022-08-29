module.exports = {
  apps: [
    {
      name: "app-name",
      script: "./next/standalone/node_modules/next next",
      args: "start -p " + (process.env.PORT || 3000),
      watch: false,
      autorestart: true,
    },
  ],
};
