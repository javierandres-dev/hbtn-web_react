export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
};
