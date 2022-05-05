import type { File } from "~/type/File";

export type Link = {
  createdAt: Date;
  file: File
  fileId: string;
  id: string;
  link: string;
  name: string;
  updatedAt: string;
}
