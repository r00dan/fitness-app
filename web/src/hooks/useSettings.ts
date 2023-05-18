import { useState } from "react";
import { type RadioChangeEvent } from 'antd';

import { OptionType } from "molecules";

export const enum Language {
  EN = 'en',
  RU = 'ru',
}

export const enum Unit {
  KG = 'kg',
  LBS = 'lbs',
}

export function useSettings() {
  const defaultLanguage = Language.EN;
  const defaultUnit = Unit.KG;
  
  const makeLanguageOptions = (): OptionType[] => ([
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Русский',
      value: 'ru',
      disabled: true,
    },
  ]);

  const makeUnitOptions = (): OptionType[] => ([
    {
      label: 'Kgs',
      value: 'kg',
    },
    {
      label: 'Lbs',
      value: 'lbs',
    },
  ]);

  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [unit, setUnit] = useState<Unit>(defaultUnit);

  const handleLanguageChange = ({ target: { value } }: RadioChangeEvent) => setLanguage(value);
  const handleUnitChange = ({ target: { value } }: RadioChangeEvent) => setUnit(value);

  return {
    language,
    unit,
    languageOptions: makeLanguageOptions(),
    unitOptions: makeUnitOptions(),
    handleLanguageChange,
    handleUnitChange,
  };
}
