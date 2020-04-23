/*
author: {{createName}}
createAt: {{createAt}}
description: {{description}}
*/
import React from 'react';
import { connect } from 'dva';
import { ConnectState, Dispatch } from '@/models/connect';
import { StateType } from './model';
import styles from './style.less';
// import { reducer, initializer } from './reducer';

// props
export interface {{componentName}}Prop extends StateType {
    dispatch: Dispatch;
};

// component
const {{componentName}}:React.FC<{{componentName}}Prop> = props => {
    const {dispatch} = props;
    return (
        <div>hello,{{PageName}}is complete!</div>
    )
}

// export 
export default connect(({ {{nameSpace}} , loading }: {{{nameSpace}}: StateType} & ConnectState ) => ({
    ...{{nameSpace}},
}))({{componentName}});