/**
 * Formats a kebab-case string to PascalCase
 * @param str String in kebab-case format (e.g., "arrow-right")
 * @returns String in PascalCase format (e.g., "ArrowRight")
 */
export function formatNameToPascalCase(str: string): string {
    return str
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }
  
  /**
   * Formats a kebab-case string to camelCase
   * @param str String in kebab-case format (e.g., "arrow-right")
   * @returns String in camelCase format (e.g., "arrowRight")
   */
  export function formatNameToCamelCase(str: string): string {
    const pascalCase = formatNameToPascalCase(str);
    return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
  }