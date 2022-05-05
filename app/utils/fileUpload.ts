import { unstable_createFileUploadHandler, unstable_parseMultipartFormData } from "@remix-run/node";
import { nanoid } from "nanoid";
import { extname } from "path";

export class FileUpload {
  protected path = '';

  constructor() {
    const distOne = Math.random().toString(36).substring(2, 4);
    const distTwo = Math.random().toString(36).substring(2, 4);
    this.path = `${distOne}/${distTwo}`;
  }

  private getUploadHandler = () => unstable_createFileUploadHandler({
    maxFileSize: 10_000_000,
    directory: `public/media/${this.path}`,
    file: ({ filename }) => `${nanoid()}${extname(filename)}`,
  });

  public getFormData = async (request: Request) => await unstable_parseMultipartFormData(
    request,
    this.getUploadHandler()
  );

  public getPath = () => this.path;
}
