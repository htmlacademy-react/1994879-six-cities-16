export const firstLetterUpperCase = (word: string) => {
  const [firstLetter,...rest] = word;
  return `${firstLetter.toUpperCase()}${rest.join('')}`;
};
export const getBedroomsText = (bedrooms: number) => `${bedrooms} Bedroom${bedrooms === 1 ? '' : 's'}`;
export const getAdultsText = (adults: number) => `Max ${adults} adult${adults === 1 ? '' : 's'}`;

