import BackgroundForImageStyle from "./BackgroundForImage.module.scss"

import { ReactNode } from "react"

type BackgroundForImageProps = {
  styleForDiv: {[key:string]: string}
  children: ReactNode
}

export function BackgroundForImage({ styleForDiv, children }: BackgroundForImageProps) {

  return (
    <div className={`${BackgroundForImageStyle.background}`} style={styleForDiv} >
      {children}
    </div>
  )
}