export default function devlog(...args: any[]) {
  if (import.meta.env.DEV) {
    console.log(...args)
  }
}
