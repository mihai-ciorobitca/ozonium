import source from "./team.json";
export const team = source.map((member) => ({
  ...member,
  photo: member.photo ? `/images/${member.photo.split("/").pop()}` : "",
  specializari: member.specializari.filter(
    (item): item is string => typeof item === "string" && item.length > 0,
  ),
}));
export const teamCategories = [
  ...new Set(team.map((member) => member.category)),
];
export function memberService(category: string) {
  return (
    (
      {
        ortopedie: "ortopedie",
        neurologie: "neurologie",
        recuperare: "recuperare-medicala",
        psihologie: "psihologie-clinica",
      } as Record<string, string>
    )[category] || ""
  );
}
export function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
