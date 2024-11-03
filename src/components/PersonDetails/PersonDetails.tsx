import { CSSProperties } from "react"
import { BackgroundForImage } from "../BackgroundForImage/BackgroundForImage"
import PersonDetailsStyles from "./PersonDetails.module.scss"

import samplePhoto from "./istockphoto-1335941248-612x612.jpg"

export function PersonDetails() {

  const styleForDiv:CSSProperties = {
    width: "100%",
    aspectRatio: "1 / 1"
  }

  return (
    <>
      <div className={`${PersonDetailsStyles.container}`} >
        {/* <img src="https://picsum.photos/200/200" alt="Club member" className={`${PersonDetailsStyles.img}`} /> */}

        <BackgroundForImage style={styleForDiv} >
          {/* <div className={`${PersonDetailsStyles.image}`} ></div> */}
          <img src={samplePhoto} className={`${PersonDetailsStyles.image}`}  alt="Club member" />
        </BackgroundForImage>

        <h3>John Doe</h3>
        <p>Professor</p>
        <p>foo@example.com</p>
        <p>+91 12345 67890</p>
      </div>
    </>
  )
}