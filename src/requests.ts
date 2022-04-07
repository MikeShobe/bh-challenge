export const getData = async ({ options = {}}: any) => {
  // TODO: Set up API endpoint
  const response = await fetch('<API ENDPOINT>', options);
  const data = await response.json();

  return data;
};
