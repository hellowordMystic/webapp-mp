import {UPDATE_USER_INFO,WX_USER_LOGIN,USER_AGENT_TRUE,ACTION_UPLOAD_CONFIG,ACTION_USER_AMOUNT,ORDER_COUNT
    ,LOAN_INFO,ACTION_CUSTOMER_INFO} from './constants';
import {createAction} from './../../../utils/redux';
import {API_USER_INFO,API_USER_LOGIN,API_USER_AGENT,API_UPLOAD_CONFIG,API_INIT_AMOUNT
,API_ORDER_LIST,API_ORDER_COUNT,API_LOAN_INFO,API_CUSTOMER_INFO} from './../../../constants/api';

export const UpdateUserInfo = payload => createAction({
    type:UPDATE_USER_INFO,
    url:API_USER_INFO,
    fetchOptions:{
        method:'POST'
    },
    payload
});

export const WeChatLogin = payload => createAction({
    type:WX_USER_LOGIN,
    url:API_USER_LOGIN,
    fetchOptions:{
        method:'POST',
        contentType:'application/x-www-form-urlencoded'
    },
    payload
});

export const ChangeToAgent = payload => createAction({
    type:USER_AGENT_TRUE,
    url:API_USER_AGENT,
    fetchOptions:{
        method:'POST'
    },
    payload  
})

export const dispatchUploadConfig = payload => createAction({
    type: ACTION_UPLOAD_CONFIG,
    url: API_UPLOAD_CONFIG,
    fetchOptions:{
        method:'GET'
    },
    payload
});

export const dispatchReservationPlan = () => createAction({
    type: ACTION_USER_AMOUNT,
    url: API_INIT_AMOUNT,
    fetchOptions:{
        method:'POST'
    }
});

export const dispatchOrderList = payload => createAction({
    type:ORDER_LIST,
    url:API_ORDER_LIST,
    fetchOptions:{
        method:'GET'
    },
    payload 
});

export const dispatchReservationCount = payload => createAction({
    type:ORDER_COUNT,
    url:API_ORDER_COUNT,
    fetchOptions:{
        method:'POST'
    },
    payload 
});

export const dispatchLoanInfo = payload => createAction({
    type:LOAN_INFO,
    url:API_LOAN_INFO,
    fetchOptions:{
        method:'GET'
    },
    payload 
});

export const dispatchCustomerList = payload => createAction({
    type:ACTION_CUSTOMER_INFO,
    url:API_CUSTOMER_INFO,
    fetchOptions:{
        method:'POST'
    },
    payload 
});
