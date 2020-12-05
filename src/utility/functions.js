export const stringCutter = (str) => {
    if(str.length > 60) {
      return str.substr(0, 54) + "..."
    }
    return str;
}
