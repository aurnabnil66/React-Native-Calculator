import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#22B14C"
      d="M7.832 4.626a.562.562 0 0 1-.405.174.562.562 0 0 1-.404-.174L4.57 2.05v7.35c0 .158-.06.31-.167.423A.558.558 0 0 1 4 10a.558.558 0 0 1-.404-.176.616.616 0 0 1-.167-.424V2.051L.977 4.626a.559.559 0 0 1-.405.176.559.559 0 0 1-.404-.176A.617.617 0 0 1 0 4.2c0-.16.06-.312.168-.425l3.427-3.6A.57.57 0 0 1 4 0a.548.548 0 0 1 .404.176l3.428 3.6A.603.603 0 0 1 8 4.2a.626.626 0 0 1-.168.425Z"
    />
  </Svg>
)
export default SvgComponent
