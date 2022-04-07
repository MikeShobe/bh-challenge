export const getData = async ({ options = {}}: any) => {
  const response = await fetch('<API ENDPOINT>', options);
  const data = await response.json();

  return data;
};
