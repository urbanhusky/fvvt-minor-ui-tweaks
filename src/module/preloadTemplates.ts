export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/urbanhusky-minor-ui-tweaks/templates"
  ];

  return loadTemplates(templatePaths);
}
