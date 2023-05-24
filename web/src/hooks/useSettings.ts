import { useEffect, useState } from "react";
import { type RadioChangeEvent } from 'antd';

import { OptionType } from "molecules";
import { useUser } from "stores";

export const enum Language {
  EN = 'en',
  RU = 'ru',
}

export const enum Unit {
  KG = 'kg',
  LBS = 'lbs',
}

export function useSettings() {
  const { user, updateUser } = useUser();

  const defaultLanguage = user?.preferedLanguage as Language ?? Language.EN;
  const defaultUnit = user?.preferedUnit as Unit ?? Unit.KG;
  
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

  const handleLanguageChange = ({ target: { value } }: RadioChangeEvent) => {
    setLanguage(value);
    updateUser({ preferedLanguage: value });
  };

  const handleUnitChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('change unit click');
    setUnit(value);
    updateUser({ preferedUnit: value });
  };

  return {
    language,
    unit,
    languageOptions: makeLanguageOptions(),
    unitOptions: makeUnitOptions(),
    handleLanguageChange,
    handleUnitChange,
  };
}
