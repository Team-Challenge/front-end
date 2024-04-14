interface IParameters {
  length: string | null;
  width: string | null;
  weight: string | null;
  size: string | null;
}

export const generateCharacteristicList = (
  items: IParameters[] | undefined,
  property: keyof IParameters,
  unit = '',
): string | undefined => {
  return (
    items &&
    items
      .map((item) => item[property] !== null && `${item[property]}${unit}`)
      .filter(Boolean)
      .join(', ')
  );
};
