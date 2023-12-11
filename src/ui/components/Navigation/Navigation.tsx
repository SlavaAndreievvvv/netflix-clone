"use client";
import clsx from "clsx";
import styles from "./Navigation.module.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

enum NavigationLinks {
  "/" = "Головна",
  "/movies" = "Фільми",
  "/favorites" = "Улюблені",
}

export interface NavigationProps {
  className?: string;
  username: string;
}

export const Navigation = ({ className, username }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (newPath: string) => {
    console.log("newPath", newPath);
  };

  return (
    <nav className={clsx(styles.container, className)}>
      {username && (
        <div className={styles.imageBox}>
          <Image src="/images/logo.svg" alt="logo" fill />
        </div>
      )}
    </nav>
  );
};
