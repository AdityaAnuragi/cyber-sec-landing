import BackgroundForImageStyle from "./BackgroundForImage.module.scss"

import { ReactNode } from "react"

type BackgroundForImageProps = {
  children: ReactNode
}

export function BackgroundForImage({ children }: BackgroundForImageProps) {

  const styleForDiv = {
    width: "18.75rem",
    height: "6.25rem",
    marginLeft: "auto",
    marginRight: "auto"
  }

  return (
    <div className={`${BackgroundForImageStyle.background}`} style={styleForDiv} >
      {children}
    </div>
  )
}