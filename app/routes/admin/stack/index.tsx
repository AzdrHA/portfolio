import * as React from "react";
import type { ActionFunction } from "@remix-run/node";
import StackAdminForm from "~/form/admin/StackAdminForm";
import { AdminStackFormAction } from "~/action/admin/AdminStackFormAction";

export const action: ActionFunction = async (args) => {
  return AdminStackFormAction(args);
};

export default function NewLinkPage() {
  return <StackAdminForm/>;
}
