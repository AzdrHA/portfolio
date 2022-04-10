import type { RefObject } from "react";
import type { LoginActionDataType } from "~/type/admin/LoginActionDataType";

export interface LoginAdminFormProps {
  emailRef: RefObject<HTMLInputElement>
  actionData: LoginActionDataType
  passwordRef: RefObject<HTMLInputElement>
}
