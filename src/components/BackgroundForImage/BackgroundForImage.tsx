import BackgroundForImageStyle from "./BackgroundForImage.module.scss"

import { CSSProperties, ReactNode } from "react"

/**
 * 
 * 
 * - This component should only receive one img as a child, it'll  then show a skelaton UI in place,
 * - To ensure 0 CLS (Cumulative Layout Shift) all the styling that the img would receive should be passed as the style prop instead (to style the skeleton )
 * - Add the following styles to your img element so it covers the entire skelton UI 
 * 
 *  width: 100%;
 * 
 *  height: 100%;
 * 
 *  object-fit: cover;
 * 
 *  display: block;
 */

export function BackgroundForImage({ style, children }: BackgroundForImageProps) {
  
  return (
    <div className={`${BackgroundForImageStyle.background}`} style={style} >
      {children}
    </div>
  )
}

type BackgroundForImageProps = {
  style: CSSProperties
  children: ReactNode
}