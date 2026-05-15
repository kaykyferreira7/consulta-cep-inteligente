import { describe, it, expect } from 'vitest';
import { sanitizeCep, formatCep, isValidCep } from '../utils/cepValidator';

describe('sanitizeCep', () => {
  it('removes hyphens and spaces', () => {
    expect(sanitizeCep('01310-100')).toBe('01310100');
    expect(sanitizeCep('01310 100')).toBe('01310100');
  });

  it('returns only digits', () => {
    expect(sanitizeCep('abc01310100xyz')).toBe('01310100');
  });
});

describe('formatCep', () => {
  it('formats 8-digit string as NNNNN-NNN', () => {
    expect(formatCep('01310100')).toBe('01310-100');
  });

  it('formats partial input correctly', () => {
    expect(formatCep('01310')).toBe('01310');
    expect(formatCep('013101')).toBe('01310-1');
  });
});

describe('isValidCep', () => {
  it('returns true for 8-digit CEP', () => {
    expect(isValidCep('01310100')).toBe(true);
    expect(isValidCep('01310-100')).toBe(true);
  });

  it('returns false for incomplete CEP', () => {
    expect(isValidCep('0131010')).toBe(false);
    expect(isValidCep('')).toBe(false);
  });

  it('returns false for CEP with more than 8 digits', () => {
    expect(isValidCep('013101000')).toBe(false);
  });
});
