import { m } from "framer-motion";

import { useTheme } from "@/context/themeContext";
import { themeOptions } from "@/constants";
import { textColor } from "@/styles";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn } from "@/utils/helper";
import { useMotion } from "@/hooks/useMotion";
import { useOnKeyPress } from "@/hooks/useOnKeyPress";

const ThemeMenu = () => {
  const { theme, setTheme, checkSystemTheme, setShowThemeOptions, closeMenu } =
    useTheme();
  const { zoomIn } = useMotion();

  const { ref } = useOnClickOutside({
    action: closeMenu
  });
  
  useOnKeyPress({
    action: closeMenu,
    key: "Escape"
  })

  const changeTheme = (theme: string) => {
    if (theme === "System") {
      checkSystemTheme();
    } else {
      setTheme(theme);
    }
    setShowThemeOptions(false);
  };

  return (
    <m.ul
      ref={ref}
      variants={zoomIn(0.9, 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{
        background: `${theme === "Light" ? "#FAFAFA" : "rgba(0,0,0,0.7)"}`,
      }}
      className="absolute top-[200%] right-[25%] bg-primary shadow-md backdrop-blur-sm  rounded-md overflow-hidden dark:dark-glass light-glass backdrop:blur-md"
    >
      {themeOptions.map((option, index) => (
        <li
          key={index}
          className={cn(
            "hover:bg-gray-200 dark:hover:bg-black transition-all duration-300",
            theme === option.title && "bg-gray-200 dark:bg-black "
          )}
        >
          <button
            name="theme"
            type="button"
            className={cn(
              "flex flex-row items-center gap-3 w-full font-medium py-2 px-4 text-[14px]",
              theme === option.title && textColor
            )}
            onClick={() => {
              changeTheme(option.title);
            }}
          >
            {<option.icon />}
            <span>{option.title}</span>
          </button>
        </li>
      ))}
    </m.ul>
  );
};

export default ThemeMenu;
