"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|es)/, "")}`;
    router.push(newPath);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 border rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        {locales.find((l) => l.code === currentLocale)?.label}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border rounded-md shadow-lg">
          {locales.map(({ code, label }) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  className={`block w-full text-left px-3 py-2 text-sm ${
                    code === currentLocale
                      ? "font-semibold text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  } ${active ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                  onClick={() => switchLocale(code)}
                >
                  {label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
