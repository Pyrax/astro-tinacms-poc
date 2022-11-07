export function basename(path: string): string {
  const filename = path.split(/[\\/]/).pop();
  return filename?.substring(0, filename.lastIndexOf('.')) ?? '';
}
