export type MessageType = import("../constants").MessageType;

export interface MessageState {
  messageType: MessageType;
  message: string;
}
