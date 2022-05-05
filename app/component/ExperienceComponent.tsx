import type { FC } from "react";
import type { Experience } from "~/type/Experience";

export const ExperienceComponent: FC<Experience> = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        {props.name}
        <span>{props.where}</span>
      </div>
    </div>
  )
}
