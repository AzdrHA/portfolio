import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUserId } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { IndexMetaData } from "~/metadata/admin/IndexMetaData";
import { getAllLink } from "~/model/link.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const notes = await getAllLink();
  return json({ notes });
};

export const meta: MetaFunction = () => {
  return IndexMetaData;
};

export default function AdminIndex() {
  const data = useLoaderData();

  return (
    <div className={'flex'}>
      {
        data.notes.map((link: any, i: number) => {
          return (
            <a key={i} className={"flex justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"}
               title={link.name} target="_blank" href={link.link} rel="noreferrer">
              <img src={`/media/${link.file.path}`} alt={`${link.name} icon`} />
            </a>
          );
        })
      }
    </div>
  );
}
