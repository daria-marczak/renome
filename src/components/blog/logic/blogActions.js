import * as actions from './blogConstants';

export const createComment = comment => ({
  type: actions.CREATE_COMMENT,
  comment,
});
