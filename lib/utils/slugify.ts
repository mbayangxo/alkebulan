export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[''&]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

export function findBySlug<T extends { country: string }>(
  list: T[],
  slug: string
): T | undefined {
  return list.find((item) => slugify(item.country) === slug);
}
