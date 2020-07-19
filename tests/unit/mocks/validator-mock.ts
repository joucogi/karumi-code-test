import mock from "./mock";

const ValidatorMock = (implementation: Record<string, jest.Mock>) => {
   return mock(implementation);
};

export default ValidatorMock;