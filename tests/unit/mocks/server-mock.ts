import mock from "./mock";

const ServerMock = (implementation: Record<string, jest.Mock>) => {
  return mock(implementation);
};

export default ServerMock;
