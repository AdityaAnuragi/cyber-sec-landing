import { OneEvent } from "../../components/OneEvent/OneEvent"
import AllEventsStyles from "./AllEvents.module.scss"

export function AllEvents() {
  return (
    <div className={`${AllEventsStyles.container}`} >
      <OneEvent />
      <OneEvent />
      <OneEvent />
      <OneEvent />
      <OneEvent />
    </div>
  )
}