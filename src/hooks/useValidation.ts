import { useState, useEffect } from 'react';

interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const useValidation = <T>(values: T, validate: (values: T) => Record<string, string>) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [values, validate]);

  return { errors, isValid };
};