import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from '@hooks';
import { Icon } from '@ui';
import { LuChevronDownSquare, LuChevronUpSquare } from "react-icons/lu";
import styles from './SideNavbar.module.scss';

interface Route {
  label: string;
  link: string;
  icon: ReactNode;
}

type SideNavbarProps = {
  title: string;
  routes: Route[];
};

export const SideNavbar: FC<SideNavbarProps> = ({ title, routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    title === 'Pages' && setOpen(true)
  }, [title])

  useEffect(() => {
    const activeLabel = routes.find(route => route.link === location.pathname)?.label ?? '/';
    setActiveRoute(activeLabel);
  }, [location.pathname, routes, setActiveRoute]);

	const handleClick = useCallback((label: string, link: string) => {
		if (label !== activeRoute) {
			setActiveRoute(label);
			navigate(link);
		}
	}, [activeRoute, setActiveRoute, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <label className={styles.title_text}>{title}</label>
        <Icon 
          size="1.2rem"
          icon={open ? <LuChevronDownSquare/> : <LuChevronUpSquare/>} 
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && <>
        {routes.map(({ label, link, icon }) => (
          <div
            key={label}
            className={`${styles.link} ${label === activeRoute ? styles.activeLink : ''}`}
            onClick={() => handleClick(label, link)}
          >
            <Icon mr={9} icon={icon} />
            <label className={styles.text}>{label}</label>
          </div>
        ))}
      </>}
    </div>
  );
};
