import BackgroundForImageStyle from "./BackgroundForImage.module.scss"

import { ReactNode } from "react"

type BackgroundForImageProps = {
  children: ReactNode
}

export function BackgroundForImage({children}: BackgroundForImageProps) {
  return (
    <div className={`${BackgroundForImageStyle.background}`} >
      {children}
    </div>
  )
}