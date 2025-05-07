export function replaceQuery(url: string, query: string): string {
  return url.replace("{query}", query)
}