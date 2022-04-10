import { Form } from "@remix-run/react";
import * as React from "react";
import type { LoginAdminFormProps } from "~/type/admin/LoginAdminFormPropsType";

export default function LoginAdminForm(props: LoginAdminFormProps) {
  return (
    <Form method="post" className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            ref={props.emailRef}
            id="email"
            required
            autoFocus={true}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={props.actionData?.errors?.email ? true : undefined}
            aria-describedby="email-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
          {props.actionData?.errors?.email && (
            <div className="pt-1 text-red-700" id="email-error">
              {props.actionData.errors.email}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            ref={props.passwordRef}
            name="password"
            type="password"
            autoComplete="current-password"
            aria-invalid={props.actionData?.errors?.password ? true : undefined}
            aria-describedby="password-error"
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
          {props.actionData?.errors?.password && (
            <div className="pt-1 text-red-700" id="password-error">
              {props.actionData.errors.password}
            </div>
          )}
        </div>
      </div>

      <input type="hidden" name="redirectTo" value={'/admin'} />
      <button
        type="submit"
        className="w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
      >
        Log in
      </button>
    </Form>
  )
}
