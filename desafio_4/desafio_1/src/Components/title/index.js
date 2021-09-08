const Title = ({ valueH = 2, children }) => {
  if (valueH === 1) {
    return <h1>{children}</h1>;
  } else if (valueH === 2) {
    return <h2>{children}</h2>;
  } else if (valueH === 3) {
    return <h3>{children}</h3>;
  } else if (valueH === 4) {
    return <h4>{children}</h4>;
  } else if (valueH === 5) {
    return <h5>{children}</h5>;
  } else {
    return <h6>{children}</h6>;
  }
};
export default Title;
