import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import * as React from "react";
import { getUserId } from "~/session.server";
import type { LoginActionDataType } from "~/type/admin/LoginActionDataType";
import LoginAdminForm from "~/Form/Admin/LoginAdminForm";
import { AdminLoginFormAction } from "~/Action/Admin/AdminLoginFormAction";
import { LoginMetaData } from "~/metadata/admin/LoginMetaData";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action: ActionFunction = async (args) => {
  return AdminLoginFormAction(args)
};

export const meta: MetaFunction = () => {
  return LoginMetaData
};

export default function LoginPage() {
  const actionData = useActionData() as LoginActionDataType;
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <LoginAdminForm emailRef={emailRef} actionData={actionData} passwordRef={passwordRef}/>
      </div>
    </div>
  );
}
