import PropTypes from "prop-types";
import Anchor from "@ui/anchor";
import clsx from "clsx";
import SubMenu from "./submenu";
import MegaMenu from "./megamenu";

const MainMenu = ({ menu }) => {
    const getVisibility = (item) => {
        if (item.env === "*") {
            return true;
        }
        return item.env === process.env.NEXT_PUBLIC_APP_ENV;
    };
    return (
        <ul className="mainmenu">
            {menu.map((nav) => (
                <li
                    key={nav.id}
                    className={clsx(
                        !!nav.submenu && "has-droupdown has-menu-child-item",
                        !!nav.megamenu && "with-megamenu"
                    )}
                >
                    {getVisibility(nav) && (
                        <Anchor
                            path={nav.path}
                            className={
                                nav.env === "dev"
                                    ? "text-warning its_new"
                                    : "its_new"
                            }
                        >
                            {nav.text}
                        </Anchor>
                    )}
                    {nav?.submenu && <SubMenu menu={nav.submenu} />}
                    {nav?.megamenu && <MegaMenu menu={nav.megamenu} />}
                </li>
            ))}
        </ul>
    );
};

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;
