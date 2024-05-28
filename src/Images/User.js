import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const User = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M15 15.403a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 22.403c0-2.209-2.239-4-5-4s-5 1.791-5 4"
    />
  </Svg>
)
export default User
