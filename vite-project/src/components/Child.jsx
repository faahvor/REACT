/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
const Child = (props) => {
  console.log(props);
  return (/*  */
    <div>
      <h1>this is the child </h1>
      <p className="bg-red-400">data: {props.data}</p>
    </div>
  );
};
export default Child;
