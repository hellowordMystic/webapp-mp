export const DEVHOST = 'https://lovemeipin.com:8444/meipin';
// yapi  
export const MOCHOST = 'http://yapi.demo.qunar.com/mock/65279';

export const DevEnv = false;

export const HOST = DevEnv ? DEVHOST : MOCHOST;

export const API_USER_LOGIN = `${HOST}/wx/v1/wxuser/wxLogin`;

// product
export const API_PRODUCT_OWNER = `${HOST}/api/v1/product/owner`;

export const API_PORDUCT_CREATE = `${HOST}/api/v1/product/create`;

export const API_PRODUCT_UPDATE = `${HOST}/api/v1/product/update`;