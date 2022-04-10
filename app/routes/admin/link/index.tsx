import * as React from "react";
import type { ActionFunction } from "@remix-run/node";
import { AdminLinkFormAction } from "~/action/admin/AdminLinkFormAction";
import LinkAdminForm from "~/form/admin/LinkAdminForm";

export const action: ActionFunction = async (args) => {
  return AdminLinkFormAction(args);
};

export default function NewLinkPage() {
  return <LinkAdminForm/>;
}
