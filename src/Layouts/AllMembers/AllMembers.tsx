import { PersonDetails } from "../../components/PersonDetails/PersonDetails";

import AllMembersStyles from "./AllMembers.module.scss"

export function AllMembers() {
  return (
    <div className={`${AllMembersStyles.container}`} >
      <PersonDetails />
      <PersonDetails />
      <PersonDetails />
      <PersonDetails />
      <PersonDetails />
      <PersonDetails />
    </div>
  )
}