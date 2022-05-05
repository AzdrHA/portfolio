import * as React from "react";
import type { ActionFunction } from "@remix-run/node";
import ExperienceAdminForm from "~/form/admin/ExperienceAdminForm";
import { AdminExperienceFormAction } from "~/action/admin/AdminExperienceFormAction";

export const action: ActionFunction = async (args) => {
  return AdminExperienceFormAction(args);
};

export default function NewLinkPage() {
  return <ExperienceAdminForm/>;
}
