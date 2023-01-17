export const getRandomInteger = (max: number, max_included = false) => {
  max = max_included ? (max + 1) : max;

  return Math.floor(Math.random() * (max));
};

export const getRandomElementsFromList = (fromList: any[], maxNumberOfElements: number = 4) => {
  const clonedList = fromList.slice()

  const getElement = () => {
    let i = getRandomInteger(clonedList.length);
    return clonedList.splice(i, 1)[0];
  };

  const returnList: any[] = [getElement()];

  for (let index = 1; index < maxNumberOfElements; index++) {
    if (Math.random() < 0.5) {
      returnList.push(getElement());
    }
  }

  return returnList;
};