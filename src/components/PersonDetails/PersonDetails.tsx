import PersonDetailsStyles from "./PersonDetails.module.scss"

export function PersonDetails() {
  return(
    <>
      <div className={`${PersonDetailsStyles.container}`} >
        {/* <img src="https://picsum.photos/200/200" alt="Club member" className={`${PersonDetailsStyles.img}`} /> */}
        <div className={`${PersonDetailsStyles.imagePlaceholder}`} ></div>
        <h3>John Doe</h3>
        <p>Professor</p>
        <p>foo@example.com</p>
        <p>+91 12345 67890</p>
      </div>
    </>
  )
}