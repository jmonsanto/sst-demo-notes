import { StorageStack } from "./StorageStack";

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack);
}
