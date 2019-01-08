const root = 'https://itunes.apple.com';

export const apiTask = (dispatch, id, promise, { map } = {}) => new Promise(
  async (resolve, reject) => {
    dispatch({
      type: `API_REQUEST_${id}`,
    });

    try {
      const result = await promise;
      if (result.status !== 200) {
        const error = Error(`Failed to fetch API task ${id}`);
        error.extra = {
          status: result.status,
          url: result.url,
          id,
          originalResult: result,
        };
        throw error;
      }
      dispatch({
        type: `API_RESPONSE_${id}`,
        payload: map ? map(result.body) : result.body,
      });
      resolve(result);
    } catch (error) {
      dispatch({
        type: `API_FAILED_${id}`,
        payload: { ...error },
        error: true,
      });
      reject(error);
    }
  },
);

const apiRequest = async ({
  url,
  method,
}) => {
  const response = await fetch(url, {
    method,
  });
  const body = await response.text();

  return {
    status: response.status,
    body: JSON.parse(body),
  };
};


export const getAlbums = (limit, format) => apiRequest({
  url: `${root}/us/rss/topalbums/limit=${limit}/${format}`,
  method: 'GET',
});
