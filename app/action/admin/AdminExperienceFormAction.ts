import { json, redirect} from "@remix-run/node";
import type { DataFunctionArgs } from "@remix-run/server-runtime/routeModules";
import { prisma } from "~/db.server";

export const AdminExperienceFormAction = async (args: DataFunctionArgs) => {
  const formData = await args.request.formData();

  const name = formData.get('name');
  const where = formData.get('where');
  const date = formData.get('date');
  const description = formData.get('description');

  if (typeof name !== "string" || name.length === 0) {
    return json(
      { errors: { title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof where !== "string" || where.length === 0) {
    return json(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  if (typeof date !== "string" || date.length === 0) {
    return json(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }

  if (typeof description !== "string" || description.length === 0) {
    return json(
      { errors: { body: "Body is required" } },
      { status: 400 }
    );
  }


  await prisma.experience.create({
    data: {
      name: name,
      where: where,
      date: date,
      description: description,
    }
  })

  return redirect('/admin')
}
