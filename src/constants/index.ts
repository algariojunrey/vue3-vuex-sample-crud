export const messageType = {
  info: 0,
  success: 1,
  danger: 2,
  warning: 3,
};

export type MessageType = typeof messageType[keyof typeof messageType];
