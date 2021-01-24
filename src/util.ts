export function getIPCPath(id: number) {
  if (process.platform === "win32") return `\\\\?\\pipe\\discord-ipc-${id}`;

  let XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP;

  try {
    XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    TMPDIR = process.env["XDG_RUNTIME_DIR"];
    TMP = process.env["TMP"];
    TEMP = process.env["TEMP"];
  } catch (e) {}

  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || "/tmp";
  return `${prefix.replace(/\/$/, "")}/discord-ipc-${id}`;
}
