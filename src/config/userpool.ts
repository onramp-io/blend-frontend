import { CognitoUserPool } from 'amazon-cognito-identity-js';

// WORKS

const user_pool_config = {
  UserPoolId: 'us-east-2_bKQngxhig',
  ClientId: '6fuaov5v2rdnvj1t3oncs74r6g',
};

// export const getServerSideProps = async () => {
//   console.log(process.env.COGNITO_POOL_ID);
// };
// getServerSideProps();

// ERROR: Both UserPoolId and ClientId are required.
// environment vars are set in .env.local

// const user_pool_config = {
//   UserPoolId: process.env.COGNITO_POOL_ID as string,
//   ClientId: process.env.COGNITO_CLIENT_ID as string,
// };

export default new CognitoUserPool(user_pool_config);
