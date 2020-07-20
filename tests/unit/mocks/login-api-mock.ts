import mock from "./mock";

const LoginApiMock = (implementation: Record<string, jest.Mock>) => {
  return mock(implementation);
};

export default LoginApiMock;
