import { Fragment } from "react";

/**
 * Rendert **fett**-Auszeichnung sicher (kein HTML-Injection): der Text wird an
 * `**...**` gesplittet, ungerade Segmente werden zu <strong>. Der Content-Layer
 * darf so einzelne Wörter/Zahlen hervorheben, ohne HTML zu schreiben.
 */
export function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-[#1e293b]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
