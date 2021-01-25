export function getIPCPath(id: number) {
  if (process.platform === "win32") return `\\\\?\\pipe\\discord-ipc-${id}`;

  let XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP;

  XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
  TMPDIR = process.env["TMPDIR"];
  TMP = process.env["TMP"];
  TEMP = process.env["TEMP"];

  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || "/tmp";
  return `${prefix.replace(/\/$/, "")}/discord-ipc-${id}`;
}
