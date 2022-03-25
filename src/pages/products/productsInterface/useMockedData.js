import { useParams, useSearchParams } from "react-router-dom";
import onlineStore from "images/online-store.png";
import { useRef, useState, useEffect, useCallback } from "react";

const useMockedData = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [mockedData, setMockedData] = useState([]);
  const mockedDataByNameDesc = useRef([]);
  const mockedDataByNameAsc = useRef([]);
  const mockedDataByPriceDesc = useRef([]);
  const mockedDataByPriceAsc = useRef([]);

  const category = params["*"];
  const subCategory = searchParams.get("subCategoria");
  const dietType = searchParams.get("dieta");
  const weight = searchParams.get("peso");
  const samplingOrder = searchParams.get("orden");

  const categoryRef = useRef(category);
  const subCategoryRef = useRef(subCategory);
  const dietTypeRef = useRef(dietType);
  const weightRef = useRef(weight);

  const mockedDataIsInitial = mockedData.length === 0;

  const updateMockedDataRefs = useCallback((urlSettings) => {
    const { category, subCategory, dietType, weight } = urlSettings;

    const getRandomInteger = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);

    const getProductWeightNumber = (productName) => {
      const weightString = productName.split(" -- ")[1];

      if (weightString === "1kg") return 1;
      else {
        return parseInt(weightString.replace("g", ""));
      }
    };

    const getProductPrice = (productWeightNumber) => {
      if (productWeightNumber === 1) return getRandomInteger(600, 3000);
      else if (productWeightNumber <= 100) return getRandomInteger(50, 400);
      else if (productWeightNumber > 100 && productWeightNumber <= 500)
        return getRandomInteger(190, 900);
      else return getRandomInteger(600, 3000);
    };

    const getPriceFor1Kg = ({ productPrice, productWeightNumber }) => {
      if (productWeightNumber === 1) return productPrice;
      else {
        return Math.floor((1000 / productWeightNumber) * productPrice * 0.97);
      }
    };

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
          if (weight === "<=100g")
            return ["40g", "50g", "80g", "100g"][getRandomInteger(0, 4)];
          else if (weight === "e150y500g")
            return ["150g", "200g", "250g", "400g", "500g"][
              getRandomInteger(0, 5)
            ];
          else if (weight === "1kg") return "1kg";
        };

        const getWeightTwoParameters = (weightArray) => {
          const lessThan100 = weightArray.includes("<=100g");
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

    const getProductData = (productName) => {
      const productPrice = getProductPrice(getProductWeightNumber(productName));

      const priceString = `$ ${productPrice},00`;
      const detailsStrings = `$ ${getPriceFor1Kg({
        productPrice,
        productWeightNumber: getProductWeightNumber(productName),
      })},00 por 1Kg`;

      return {
        title: productName,
        price: priceString,
        details: detailsStrings,
        imageSrc: onlineStore,
      };
    };

    const updateMockedDataByPriceDesc = () => {
      const getPriceNumber = (item) =>
        parseInt(item.price.split(" ")[1].split(",")[0]);

      const pricesArray = mockedDataByNameDesc.current.map((item) =>
        getPriceNumber(item)
      );

      const orderedPricesArray = pricesArray.sort((a, b) => a - b);

      let mockedDataCopy = [...mockedDataByNameDesc.current];
      mockedDataByPriceDesc.current = [];
      for (let j = 0; j < orderedPricesArray.length; j++) {
        const orderedPriceNumber = orderedPricesArray[j];
        let matches = [];

        for (let i = 0; i < mockedDataCopy.length; i++) {
          const currentPriceNumber = parseInt(
            mockedDataCopy[i].price.split(" ")[1].split(",")[0]
          );

          if (currentPriceNumber === orderedPriceNumber) {
            matches.push(mockedDataCopy[i]);
            mockedDataCopy.splice(i, 1);
            i--;
          }
        }

        if (matches.length >= 1) {
          for (let k = 0; k < matches.length; k++) {
            mockedDataByPriceDesc.current.push(matches[k]);
          }
        }
      }
    };

    mockedDataByNameDesc.current = productsNamesArray.map((productName) =>
      getProductData(productName)
    );

    const mockedDataByNameDescCopy = [...mockedDataByNameDesc.current];
    mockedDataByNameAsc.current = mockedDataByNameDescCopy.reverse();

    updateMockedDataByPriceDesc();

    const mockedDataByPriceDescCopy = [...mockedDataByPriceDesc.current];
    mockedDataByPriceAsc.current = mockedDataByPriceDescCopy.reverse();
  }, []);

  useEffect(() => {
    const orderType = samplingOrder.split(",")[0];
    const orderDirection = samplingOrder.split(",")[1];

    const urlSettings = {
      category,
      subCategory,
      dietType,
      weight,
    };

    const productsParamsChanges =
      categoryRef.current !== category ||
      subCategoryRef.current !== subCategory ||
      dietTypeRef.current !== dietType ||
      weightRef.current !== weight;

    const updateProductsParamsRef = () => {
      categoryRef.current = category;
      subCategoryRef.current = subCategory;
      dietTypeRef.current = dietType;
      weightRef.current = weight;
    };

    const updateMockedDataState = () => {
      if (orderType === "nombre") {
        if (orderDirection === "desc")
          setMockedData(mockedDataByNameDesc.current);
        else setMockedData(mockedDataByNameAsc.current);
      } else if (orderType === "precio") {
        if (orderDirection === "desc")
          setMockedData(mockedDataByPriceDesc.current);
        else setMockedData(mockedDataByPriceAsc.current);
      }
    };

    if (productsParamsChanges || mockedDataIsInitial) {
      updateMockedDataRefs(urlSettings);
      updateProductsParamsRef();
    }

    updateMockedDataState();
  }, [
    category,
    subCategory,
    dietType,
    weight,
    updateMockedDataRefs,
    samplingOrder,
    mockedDataIsInitial,
  ]);

  return { mockedData };
};

export default useMockedData;
