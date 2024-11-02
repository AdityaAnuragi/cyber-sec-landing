import BackgroundForImageStyle from "./BackgroundForImage.module.scss"

import { CSSProperties, ReactNode } from "react"

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