export const winstonTemplate = (info: any) =>
  `[${info.metadata.scope} -> ${info.metadata.function}] - ${new Date().toUTCString()} - ${info.level}: ${
    info.message
  } ${JSON.stringify(info.metadata.args) ?? ''}`;
