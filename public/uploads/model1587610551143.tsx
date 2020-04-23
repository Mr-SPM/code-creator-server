/*
author: {{createName}}
createAt: {{createAt}}
description: {{description}}
*/
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { success } from '@/utils/message';
import { isSuccess } from '@/utils/request';
// import {} from './service';
// import {} from './type.d';

// StateType
export interface StateType {}

// Model def
export interface {{componentName}}ModelType {
  namespace: '{{nameSpace}}';
  state: StateType;
  effects: {
    myEffect: Effect;
  };
  reducers: {
    myReducers: Reducer<StateType>;
  };
}

const {{componentName}}Model: {{componentName}}ModelType = {
  namespace: '{{PageName}}',
  state: {},
  effects: {
    *myEffect({ payload }, { call, put }) {
      const response = yield call('todo', payload);
      if (isSuccess(response)) {
        success();
        yield put({
          type: 'myReducers',
          payload: response,
        });
      }
    },
  },
  reducers: {
    myReducers: (state, { payload }) => ({
      ...state!,
      ...payload,
    }),
  },
};

export default {{componentName}}Model;
