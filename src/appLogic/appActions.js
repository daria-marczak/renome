export const action = actionName => ({
  INVOKE: `${actionName}_INVOKE`,
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
});
