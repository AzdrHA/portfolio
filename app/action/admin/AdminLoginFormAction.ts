import { validateEmail } from "~/utils";
import { json } from "@remix-run/node";
import type { LoginActionDataType } from "~/type/admin/LoginActionDataType";
import { verifyLogin } from "~/model/user.server";
import { createUserSession } from "~/session.server";
import type { DataFunctionArgs } from "@remix-run/server-runtime/routeModules";

export const AdminLoginFormAction = async (args: DataFunctionArgs) => {
  const formData = await args.request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json<LoginActionDataType>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json<LoginActionDataType>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json<LoginActionDataType>(
      { errors: { email: "Invalid email or password" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request: args.request,
    userId: user.id,
    remember: remember === "on",
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/notes"
  });
};
