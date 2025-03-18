import React from "react";
import ThemeSwitch from "./ui/theme-switcher";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="text-xl font-bold">Pulkit</div>
      <ThemeSwitch />
    </div>
  );
}
