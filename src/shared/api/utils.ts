export const fetchRequest = (requestUrl: string, options: {}) => {
  return fetch(requestUrl, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
