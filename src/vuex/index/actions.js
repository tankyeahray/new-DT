import axios from 'axios';

export default {
  reverse ({ commit, state }) {
    commit('REVERSE_MSG');
  }
};