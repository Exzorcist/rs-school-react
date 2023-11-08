// TODO: fix issue with getting image from API
const clearImageUrl = (str: string | null | undefined): string => {
  const matchResult = str && str.match(/https/gi);

  if (matchResult && matchResult.length > 1) {
    const index = str.slice(1).indexOf('https') + 1;
    return str.substring(index);
  }

  return str || '';
};

export default clearImageUrl;
