export const getTestData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('API works!'), 1000);
  });
};