"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "En" },
  { code: "es", label: "Es" },
//   { code: "de", label: "De" },
//   { code: "fr", label: "Fr" },
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    if (locale !== currentLocale) {
      const newPath = `/${locale}${pathname.replace(/^\/(en|es|de|fr)/, "")}`;
      router.push(newPath);
    }
  };

  return (
    <div className="text-sm text-gray-200 dark:text-gray-400">
      {locales.map(({ code, label }, index) => (
        <span key={code}>
          <button
            className={`hover:underline ${
              code === currentLocale ? "text-white font-semibold" : "text-gray-300"
            }`}
            onClick={() => switchLocale(code)}
          >
            {label}
          </button>
          {index < locales.length - 1 && " | "}
        </span>
      ))}
    </div>
  );
}
