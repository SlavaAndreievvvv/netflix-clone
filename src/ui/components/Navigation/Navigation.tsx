"use client";
import clsx from "clsx";
import styles from "./Navigation.module.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "..";

enum NavigationLinks {
  "/" = "Головна",
  "/movies" = "Фільми",
  "/favorites" = "Улюблені",
}

export interface NavigationProps {
  className?: string;
  username?: string;
}

export const Navigation = ({ className, username }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (newPath: string) => {
    console.log("newPath", newPath);
  };

  return (
    <header className={clsx(styles.header, className)}>
      <Container>
        <nav className={styles.navigation}>
          <button className={styles.mobileMenuButton}>Меню</button>
          <div className={styles.menu} tabIndex={1}>
            {username ? (
              <Link className={styles.imageLinkBox} href="/home">
                <Image src="/images/logo.svg" alt="logo" fill />
              </Link>
            ) : (
              <Link className={styles.linkEnter} href="/auth">
                Увійти
              </Link>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
