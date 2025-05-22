const useURLQuery = (key: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  const getParam = () => {
    return searchParams.get(key);
  };

  const setParam = (value: string) => {
    searchParams.set(key, value);
    window.history.pushState({}, '', `?${searchParams.toString()}`);
  };

  const deleteParam = () => {
    searchParams.delete(key);
    window.history.pushState({}, '', `?${searchParams.toString()}`);
  };

  return {
    getParam,
    setParam,
    deleteParam
  };
};

export default useURLQuery;
