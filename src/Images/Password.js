import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Passowrd = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    {...props}
  >
    <Rect
      width={30}
      height={30}
      y={0.903}
      fill="#000"
      fillOpacity={0.05}
      rx={15}
    />
    <Path
      stroke="#4C4C4C"
      d="M20 16.903v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1m0-4h-4a2 2 0 0 0 0 4h4m0-4a2 2 0 0 1 0 4m-9-6v-3a3 3 0 0 1 6 0v3m2.5 4h1m-3 0h1m-3 0h1"
    />
  </Svg>
)
export default Passowrd

