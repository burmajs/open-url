// This code are from https://github.com/rauschma/openurl

import { spawnSync } from "node:child_process";

let command: string = "";

switch (process.platform) {
  case "darwin":
    command = "open";
    break;
  case "win32":
    command = "explorer.exe";
    break;
  case "linux":
    command = "xdg-open";
    break;
  default:
    throw new Error(`Unsupported platform: ${process.platform}`);
}
/**
 * Opens the given URL in the default browser.
 *
 * @example
 *
 * ```ts
 *
 * openUrl("https://example.com");
 * openUrl("http://localhost:3000");
 * ```
 * @param {string} url - The URL to open.
 * @param {(err: Error | string) => void} [callback] - Optional callback.
 */
export default function openUrl(
  url: string,
  callback?: (err: Error | string) => void
) {
  const child = spawnSync(command, [url]);
  const errorText = child.stderr.toString("utf8");
  if (errorText.length > 0) {
    const error = new Error(errorText);
    if (callback) {
      callback(error);
    } else {
      throw error;
    }
  }
}
