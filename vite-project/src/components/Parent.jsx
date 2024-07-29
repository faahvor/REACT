/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */

import Child from "./Child";

const Parent = ({data,age,array})=>{
    console.log(data);
return (
    <div>
        <h1>this is the parent and deji is the father</h1>
        <p>data passed:{data}</p>
        <Child data={array}/>
    </div>
)

}
export default Parent