import { Form } from "@remix-run/react";
import * as React from "react";
import type { LoaderFunction} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export default function LinkAdminForm()
{
  return (
    <Form method="post"  style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%",
    }}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            required
            autoFocus={true}
            name="name"
            type="name"
            autoComplete="name"
            aria-describedby="name-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700"
        >
          link
        </label>
        <div className="mt-1">
          <input
            id="link"
            required
            autoFocus={true}
            name="link"
            type="link"
            autoComplete="link"
            aria-describedby="link-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
        </div>
      </div>

      <input type="hidden" name="redirectTo" value={'/admin'} />
      <button
        type="submit"
        className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
      >
        Create
      </button>
    </Form>
  )
}
