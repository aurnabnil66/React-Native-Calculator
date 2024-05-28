import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#EE1C24"
      d="M.168 5.374A.562.562 0 0 1 .573 5.2c.151 0 .297.062.404.174L3.43 7.95V.599c0-.158.06-.31.167-.423A.558.558 0 0 1 4 0c.152 0 .297.063.404.176A.616.616 0 0 1 4.571.6v7.349l2.452-2.575a.559.559 0 0 1 .405-.176c.152 0 .297.064.404.176A.617.617 0 0 1 8 5.8c0 .16-.06.312-.168.425l-3.427 3.6A.57.57 0 0 1 4 10a.548.548 0 0 1-.404-.176l-3.428-3.6A.603.603 0 0 1 0 5.8a.626.626 0 0 1 .168-.425Z"
    />
  </Svg>
)
export default SvgComponent
