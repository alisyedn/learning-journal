import winston from "winston";

const { combine, timestamp, json, errors, prettyPrint } = winston.format;

export const logger = winston.createLogger({
  level: process.env.BUILD_LOGGING_LEVEL,
  format: combine(errors({ stack: true }), timestamp(), json(), prettyPrint({colorize: true})),
  transports: [
    new winston.transports.Console()
  ],
})