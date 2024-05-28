import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CalculatorImg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    viewBox="0 0 291.764 291.764"
    {...props}
  >
    <Path
      d="M191.47 45.588v27.353h36.471V45.588H191.47zm27.353 18.236h-18.235v-9.118h18.235v9.118z"
      style={{
        fill: "#b7bbbd",
      }}
    />
    <Path
      d="M45.587 154.991h36.471V118.52H45.587v36.471zm54.706 0h36.471V118.52h-36.471v36.471zm54.706-36.462V155h36.471v-36.471h-36.471zM45.587 209.697h36.471v-36.461H45.587v36.461zm54.706 0h36.471v-36.461h-36.471v36.461zm54.706 0h36.471v-36.461h-36.471v36.461zM45.587 264.403h36.471v-36.471H45.587v36.471zm54.706 0h36.471v-36.471h-36.471v36.471zm54.706 0h36.471v-36.471h-36.471v36.471z"
      style={{
        fill: "#49616e",
      }}
    />
    <Path
      d="M209.705 118.529V155h36.471v-36.471h-36.471zm0 145.874h36.471v-91.167h-36.471v91.167z"
      style={{
        fill: "#e2574c",
      }}
    />
  </Svg>
)
export default CalculatorImg
