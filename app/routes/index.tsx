import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAllLink } from "~/model/link.server";
import { getAllProgrammingLanguage } from "~/model/programming_language.server";
import { useLoaderData } from "@remix-run/react";
import { ButtonLink } from "~/component/style/button/ButtonLink";

export const loader: LoaderFunction = async () => {
  const links = await getAllLink();
  const languages = await getAllProgrammingLanguage();
  return json({ links, languages });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main className="relative bg-white">
      <div id={"presentation"} className={""}>
        <div className={"flex"}>
          {
            data.links.map((link: any, i: number) => {
              return <ButtonLink key={i} name={link.name} link={link.link} path={link.file.path}/>
            })
          }
        </div>
      </div>
      <div id={"skills"} className={""}>
        <div className={'flex'}>
          {
            data.languages.map((link: any, i: number) => {
              console.log(link);
              return <ButtonLink key={i} name={link.name} link={link.link} path={link.file.path}/>
            })
          }
        </div>
      </div>
      <div id={"experiences"} className={""}>
        bbbbb
      </div>
    </main>
  );
}
