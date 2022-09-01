module.exports = {
  apps: [
    {
      name: "nextjs-euro",
      script: "npm",
      args: "start:azure",
      watch: false,
      autorestart: true,
    },
  ],
};
