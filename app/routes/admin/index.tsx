import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { IndexMetaData } from "~/metadata/admin/IndexMetaData";
import { getAllLink } from "~/model/link.server";
import { getAllProgrammingLanguage } from "~/model/programming_language.server";
import { ButtonLink } from "~/component/style/button/ButtonLink";
import { getAllStack } from "~/model/stack.server";
import { getAllExperience } from "~/model/experience.server";
import { ExperienceComponent } from "~/component/ExperienceComponent";
import type { Experience } from "~/type/Experience";
import type { Link } from "~/type/Link";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const links = await getAllLink();
  const languages = await getAllProgrammingLanguage();
  const stacks = await getAllStack();
  const experiences = await getAllExperience();
  return json({ links, languages, stacks, experiences });
};

export const meta: MetaFunction = () => {
  return IndexMetaData;
};

export default function AdminIndex() {
  const data = useLoaderData();

  return (
    <div>
      <div className={"m-5 bg-gray-50 p-5 shadow"}>
        <h1 className={'mb-2'}>Link</h1>
        <div className={"flex"}>
          {
            data.links.map((link: Link, i: number) => {
              return <ButtonLink key={i} name={link.name} link={link.link} path={link.file.path}/>
            })
          }
        </div>
      </div>
      <div className={"m-5 bg-gray-50 p-5 shadow"}>
        <h1 className={'mb-2'}>Programming Language</h1>
        <div className={"flex"}>
          {
            data.languages.map((link: Link, i: number) => {
              return <ButtonLink key={i} name={link.name} link={link.link} path={link.file.path}/>
            })
          }
        </div>
      </div>
      <div className={"m-5 bg-gray-50 p-5 shadow"}>
        <h1 className={'mb-2'}>Stack</h1>
        <div className={"flex"}>
          {
            data.stacks.map((link: Link, i: number) => {
              return <ButtonLink key={i} name={link.name} link={link.link} path={link.file.path}/>
            })
          }
        </div>
      </div>
      <div className={"m-5 bg-gray-50 p-5 shadow"}>
        <h1 className={'mb-2'}>Experience</h1>
        <div className={"flex"}>
          {
            data.experiences.map((experience: Experience, i: number) => {
              return <ExperienceComponent {...experience} key={i}/>
            })
          }
        </div>
      </div>
    </div>
  );
}
