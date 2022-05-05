import type { FC } from "react";
import { useOptionalUser } from "~/utils";

type ButtonLinkProps = {
  name: string;
  link: string;
  path: string;
}

export const ButtonLink: FC<ButtonLinkProps> = (props) => {
  // const maybeUser = useOptionalUser();

  return (
    <div className={'relative p-1'}>
      {/*{
        maybeUser &&
        <div title={'delete'} className={'absolute flex justify-center items-center rounded-full top-0 right-0 bg-red-600 z-10 w-4 h-4 cursor-pointer'}>x</div>
      }*/}

      <a
        className={"flex justify-center grayscale transition hover:grayscale-0 focus:grayscale-0"}
        title={props.name} target="_blank" href={props.link} rel="noreferrer">
        <img src={`/media/${props.path}`} alt={`${props.name} icon`} />
      </a>
    </div>
  )
}
