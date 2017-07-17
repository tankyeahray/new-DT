const REVERSE_MSG = 'REVERSE_MSG';

export default {
  [REVERSE_MSG](state, playload) {
    state.msg = state.msg.split('').reverse().join('');
  }
};