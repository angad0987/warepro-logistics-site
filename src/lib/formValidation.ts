type SchemaWithShape = {
  shape: Record<string, { isOptional: () => boolean }>;
};

/**
 * Derives the required field names from a Zod object schema so required
 * indicators always stay in sync with the actual validation rules.
 */
export function getRequiredFieldNames(schema: SchemaWithShape): Set<string> {
  return new Set(
    Object.entries(schema.shape)
      .filter(([, fieldSchema]) => !fieldSchema.isOptional())
      .map(([fieldName]) => fieldName),
  );
}

const NAVBAR_OFFSET = 96;

/**
 * Scrolls to the first invalid field (in DOM order), then focuses its
 * interactive control. Returns false when no invalid field was found.
 */
export function scrollToFirstInvalidField(
  errors: Record<string, string>,
  container?: ParentNode | null,
): boolean {
  if (typeof window === "undefined") return false;

  const scope = container ?? document;
  const invalidField = Array.from(
    scope.querySelectorAll<HTMLElement>("[data-form-field]"),
  ).find((field) => {
    const name = field.dataset.formField;
    return Boolean(name && errors[name]);
  });

  if (!invalidField) return false;

  const control =
    invalidField.querySelector<HTMLElement>("[data-field-control]") ??
    invalidField.querySelector<HTMLElement>(
      "input:not([type='hidden']):not(.sr-only), select, textarea, button, [role='combobox'], [role='button'][tabindex]",
    );

  const focusTarget = control ?? invalidField;

  requestAnimationFrame(() => {
    invalidField.style.scrollMarginTop = `${NAVBAR_OFFSET}px`;
    invalidField.scrollIntoView({ behavior: "smooth", block: "center" });
    focusTarget.focus?.({ preventScroll: true });
  });

  return true;
}
