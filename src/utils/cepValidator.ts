export function sanitizeCep(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatCep(value: string): string {
  const digits = sanitizeCep(value);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5, 8)}`;
}

export function isValidCep(cep: string): boolean {
  const digits = sanitizeCep(cep);
  return digits.length === 8;
}
