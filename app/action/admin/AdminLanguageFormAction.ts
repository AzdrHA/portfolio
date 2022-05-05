import { json, redirect} from "@remix-run/node";
import type { DataFunctionArgs } from "@remix-run/server-runtime/routeModules";
import { prisma } from "~/db.server";
import { FileUpload } from "~/utils/fileUpload";

export const AdminLanguageFormAction = async (args: DataFunctionArgs) => {
  const fileUpload = new FileUpload();
  const formData = await fileUpload.getFormData(args.request);

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

  await prisma.programming_language.create({
    data: {
      name,
      link,
      file: {
        create: {
          path: fileUpload.getPath()+'/'+file.name,
          type: file.type,
          size: file.size,
          name: file.name,
        }
      }
    }
  })

  return redirect('/admin')
}
