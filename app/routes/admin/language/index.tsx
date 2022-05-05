import * as React from "react";
import type { ActionFunction } from "@remix-run/node";
import { AdminLanguageFormAction } from "~/action/admin/AdminLanguageFormAction";
import LanguageAdminForm from "~/form/admin/LanguageAdminForm";

export const action: ActionFunction = async (args) => {
  return AdminLanguageFormAction(args);
};

export default function NewLinkPage() {
  return <LanguageAdminForm/>;
}
