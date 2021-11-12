import { getPDFSource } from '../services/pdfviewer';

export default {
  namespace: 'pdfviewer',
  state: {
    url: '',
  },
  effects: {
    *getUrl({ payload }, { call, put, select }) {
      const resp = yield call(getPDFSource, payload);
      yield put({
        type: 'setUrl',
        payload: resp,
      });
    },
  },
  reducers: {
    setUrl(_, { payload: json }) {
      console.log('set url:' + json['url']);
      return {
        url: json['url'],
      };
    },
  },
};
