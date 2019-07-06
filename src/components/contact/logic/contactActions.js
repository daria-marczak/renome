import * as actions from './contactConstants';

export const sendMessage = message => ({
  type: actions.SEND_MESSAGE.INVOKE,
  message,
});
