export function formatTitle(title) {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return { firstPart, lastWord };
}