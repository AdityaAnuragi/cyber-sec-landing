import { Link } from "react-router-dom";
import { BackgroundForImage } from "../BackgroundForImage/BackgroundForImage";

import OneEventStyles from "./OneEvent.module.scss"

export function OneEvent() {
  return(
    <>
      <div className={`${OneEventStyles.container}`} >
        <div className={`${OneEventStyles.redBorder}`} >
          <div className={`${OneEventStyles.dataDiv}`} >October 31, 2024</div>
          <BackgroundForImage>
            <img src="https://picsum.photos/300/100" alt="event photo" className={`${OneEventStyles.image}`} />
          </BackgroundForImage>
        </div>
        <div className={`${OneEventStyles.redBorder}`} >
          <Link to={"/"} className={`${OneEventStyles.eventLinkElement}`} > Malware analysis </Link>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatibus provident pariatur perferendis quae placeat, dolore facere, velit reprehenderit aspernatur suscipit, omnis voluptate maxime enim repellendus eaque! Tenetur ea omnis mollitia repudiandae est dicta eligendi perspiciatis! Eligendi laudantium id itaque sequi repellendus voluptatem accusantium ad molestias quasi, ipsum quia omnis distinctio adipisci beatae iure, dignissimos alias voluptate sint dolore unde.</p>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt laborum eum doloremque repellat consequatur ea dolore fugiat, molestias maxime modi?</p> */}
          {/* <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
      </div>
      <div className={`${OneEventStyles.straightLine}`} ></div>
    </>
  )
}