import { Form } from "@remix-run/react";
import * as React from "react";

export default function ExperienceAdminForm()
{
  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" style={{
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
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Where
            </label>
            <div className="mt-1">
              <input
                id="where"
                required
                autoFocus={true}
                name="where"
                type="where"
                autoComplete="where"
                aria-describedby="where-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <div className="mt-1">
              <input
                id="date"
                required
                autoFocus={true}
                name="date"
                autoComplete="date"
                aria-describedby="date-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                required
                autoFocus={true}
                name="description"
                autoComplete="description"
                aria-describedby="description-error"
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
      </div>
    </div>
  )
}
