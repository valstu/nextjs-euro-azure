module.exports = {
  apps: [
    {
      name: "nextjs-euro",
      script: "npm",
      args: "run start:azure",
      watch: false,
      autorestart: true,
    },
  ],
};
