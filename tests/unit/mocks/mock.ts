const mock = (implementations: Record<string, jest.Mock>): jest.Mock => {
  return jest.fn().mockImplementation(() => {
    return implementations;
  });
};

export default mock;
