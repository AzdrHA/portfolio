import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { IndexMetaData } from "~/metadata/admin/IndexMetaData";
import { getAllLink } from "~/model/link.server";
import { getAllProgrammingLanguage } from "~/model/programming_language.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const links = await getAllLink();
  const languages = await getAllProgrammingLanguage();
  return json({ links, languages });
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
            data.links.map((link: any, i: number) => {
              return (
                <a key={i}
                   className={"flex justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"}
                   title={link.name} target="_blank" href={link.link} rel="noreferrer">
                  <img src={`/media/${link.file.path}`} alt={`${link.name} icon`} />
                </a>
              );
            })
          }
        </div>
      </div>
      <div className={"m-5 bg-gray-50 p-5 shadow"}>
        <h1 className={'mb-2'}>Programming Language</h1>
        <div className={"flex"}>
          {
            data.links.map((link: any, i: number) => {
              return (
                <a key={i}
                   className={"flex justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"}
                   title={link.name} target="_blank" href={link.link} rel="noreferrer">
                  <img src={`/media/${link.file.path}`} alt={`${link.name} icon`} />
                </a>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
