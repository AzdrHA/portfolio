import { json, redirect, unstable_createFileUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import type { DataFunctionArgs } from "@remix-run/server-runtime/routeModules";
import { nanoid } from "nanoid";
import { extname } from "path";
import { prisma } from "~/db.server";

export const AdminLinkFormAction = async (args: DataFunctionArgs) => {
  const distOne = Math.random().toString(36).substring(2, 3); // TODO base 2
  const distTwo = Math.random().toString(36).substring(2, 3); // TODO base 2
  const path = `${distOne}/${distTwo}`;

  const uploadHandler = unstable_createFileUploadHandler({
    maxFileSize: 10_000_000,
    directory: `public/media/${path}`,
    file: ({ filename }) => `${nanoid()}${extname(filename)}`,
  });

  const formData = await unstable_parseMultipartFormData(
    args.request,
    uploadHandler
  );

  const file = formData.get("file") as File;
  const name = formData.get('name');
  const link = formData.get('link');

  if (typeof name !== "string" || name.length === 0) {
    return json(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof link !== "string" || link.length === 0) {
    return json(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  await prisma.link.create({
    data: {
      name,
      link,
      file: {
        create: {
          path: path+'/'+file.name,
          type: file.type,
          size: file.size,
          name: file.name,
        }
      }
    }
  })

  return redirect('/admin')
}
