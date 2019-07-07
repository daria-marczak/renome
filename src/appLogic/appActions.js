import * as appActions from './appConstants';

export const action = actionName => ({
  INVOKE: `${actionName}_INVOKE`,
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
});

export const triggerMessage = (message, kind) => ({
  type: appActions.TRIGGER_MESSAGE,
  message,
  kind,
});

export const closeMessage = () => ({
  type: appActions.CLOSE_MESSAGE,
});
