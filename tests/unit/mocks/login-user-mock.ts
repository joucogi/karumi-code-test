import mock from "./mock";

const loginUserMockImplementation: Record<string, jest.Mock> = {
  validate: jest.fn()
};
const LoginUserMock = mock(loginUserMockImplementation);

export default LoginUserMock;
