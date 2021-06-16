import { useState } from 'react';

const noop = () => null;

const useLazyFetch = (url, { options, onError = noop, onComplete = noop }) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (data) => {
    setLoading(true);
    try {
      if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
          'Content-type': 'application/json; charset=UTF-8',
        };
      }

      const res = await fetch(url, options);

      if (res.ok) {
        const text = await res.text();
        onComplete(text ? JSON.parse(data) : {});
      } else {
        const json = await res.json();
        onError(json.errors);
      }
    } catch (e) {
      console.warn(e);
    }
    setLoading(false);
  };

  return [fetchData, { loading }];
};

export default useLazyFetch;
