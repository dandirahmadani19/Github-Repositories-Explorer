export const setQueryParam = (key: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(key, value);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
};

export const getQueryParam = (key: string): string | null => {
  return new URLSearchParams(window.location.search).get(key);
};
