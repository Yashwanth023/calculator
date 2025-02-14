export const calculate = (input) => {
    try {
      return eval(input);
    } catch (error) {
      return "Error";
    }
  };