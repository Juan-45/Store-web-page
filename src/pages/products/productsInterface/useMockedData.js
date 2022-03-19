import { useParams, useSearchParams } from "react-router-dom";

const useMockedData = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const urlSettings = {
    category: params["*"],
    subCategory: searchParams.get("subCategoria"),
    samplingOrder: searchParams.get("orden"),
    dietType: searchParams.get("dieta"),
    weight: searchParams.get("peso"),
  };

  const getMockedData = (urlSettings) => {
    const { category, subCategory, dietType, weight } = urlSettings;

    const getRandomInteger = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    const getProductNameArray = () => {
      const getWeightString = (weight) => {
        if (weight === null)
          return [
            "40g",
            "50g",
            "80g",
            "100g",
            "150g",
            "200g",
            "250g",
            "400g",
            "500g",
            "1kg",
          ][getRandomInteger(0, 10)];

        const weightArray = weight.split(",");

        const weightArrayLength = weightArray.length;
        const getWeightOneParameter = (weight) => {
          if (weight === "<100g")
            return ["40g", "50g", "80g", "100g"][getRandomInteger(0, 4)];
          else if (weight === "e150y500g")
            return ["150g", "200g", "250g", "400g", "500g"][
              getRandomInteger(0, 5)
            ];
          else if (weight === "1kg") return "1kg";
        };

        const getWeightTwoParameters = (weightArray) => {
          const lessThan100 = weightArray.includes("<100g");
          const between150And500 = weightArray.includes("e150y500g");
          const oneKilogram = weightArray.includes("1kg");
          if (lessThan100 && between150And500)
            return [
              "40g",
              "50g",
              "80g",
              "100g",
              "150g",
              "200g",
              "250g",
              "400g",
              "500g",
            ][getRandomInteger(0, 9)];
          else if (lessThan100 && oneKilogram)
            return ["40g", "50g", "80g", "100g", "1kg"][getRandomInteger(0, 5)];
          else if (between150And500 && oneKilogram)
            return ["150g", "200g", "250g", "400g", "500g", "1kg"][
              getRandomInteger(0, 6)
            ];
        };

        const getWeightThreeParameters = () =>
          [
            "40g",
            "50g",
            "80g",
            "100g",
            "150g",
            "200g",
            "250g",
            "400g",
            "500g",
            "1kg",
          ][getRandomInteger(0, 10)];

        if (weightArrayLength === 1)
          return getWeightOneParameter(weightArray[0]);
        else if (weightArrayLength === 2)
          return getWeightTwoParameters(weightArray);
        else if (weightArrayLength === 3) return getWeightThreeParameters();
      };

      const getDietTypeString = (dietType) => {
        if (dietType === null) return "";
        const dietTypeArray = dietType.split(",");
        const dietTypeArrayLength = dietTypeArray.length;

        if (dietTypeArrayLength === 1) return `${dietTypeArray[0]} `;
        else if (dietTypeArrayLength > 1) {
          const getRandomCombination = () => {
            let randomCombination =
              dietTypeArray[getRandomInteger(0, dietTypeArrayLength)];
            if (dietTypeArrayLength >= 3) {
              randomCombination = dietTypeArray[0];
              for (
                let i = 1;
                i < getRandomInteger(2, dietTypeArrayLength);
                i++
              ) {
                randomCombination += ` / ${dietTypeArray[i]} `;
              }
            }
            return randomCombination;
          };

          let dietTypeAllCombinedString = dietTypeArray[0];

          for (let i = 1; i < dietTypeArrayLength; i++) {
            dietTypeAllCombinedString += ` / ${dietTypeArray[i]} `;
          }

          const randomDietTypeString =
            dietTypeArray[getRandomInteger(0, dietTypeArrayLength)];

          const dietTypeStringsArray = [
            dietTypeAllCombinedString,
            randomDietTypeString,
            getRandomCombination(),
          ];

          return dietTypeStringsArray[getRandomInteger(0, 3)];
        }
      };
      const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z";

      const alphabetArray = alphabet.split(",");

      const productsNames = alphabetArray.map((item) => {
        const subCategoryString = subCategory ? subCategory + " " : "";
        const dietTypeString = getDietTypeString(dietType);
        const weightString = getWeightString(weight);
        return `${item} ${category} ${subCategoryString}${dietTypeString}${` -- ${weightString}`}`;
      });

      return productsNames;
    };

    const productsNamesArray = getProductNameArray();

    const productsMockedData = productsNamesArray.map((productName) => {
      const priceString = `$ ${getRandomInteger(50, 600)},00`;
      const detailsStrings = `$ ${getRandomInteger(1000, 3000)},00 por 1Kg`;

      return {
        title: productName,
        price: priceString,
        details: detailsStrings,
        imageSrc: "https://via.placeholder.com/300x300",
      };
    });

    return productsMockedData;
  };

  const productsData = getMockedData(urlSettings);

  return { productsData };
};

export default useMockedData;
