module.exports = {
    apps: [{
      name: "KoalaServer",
      script: "./server.js",
      user: "fer",  // Asegura que el proceso se ejecute con el usuario 'fer'
      watch: false,
      instances: 1,
      exec_mode: "fork",
      env_production: {
        NODE_ENV: "production"
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "/home/fer/logs/koala-error.log",
      out_file: "/home/fer/logs/koala-out.log",
      merge_logs: true,
      max_memory_restart: "200M",
      exp_backoff_restart_delay: 100,
      time: true
    }]
};
