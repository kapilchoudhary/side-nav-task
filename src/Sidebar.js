import React, { useState } from "react";

function Sidebar() {
  const [currentMainMenu, setCurrentMainMenu] = useState(0);
  const [currentSubMenu, setCurrentSubMenu] = useState(0);

  const handleMainMenu = (id) => {
    setCurrentSubMenu(0);
    if (id === currentMainMenu) {
      setCurrentMainMenu(0);
      return;
    }
    setCurrentMainMenu(id);
  };

  const handleSubMenu = (id) => {
    if (id === currentSubMenu) {
      setCurrentSubMenu(0);
      return;
    }
    setCurrentSubMenu(id);
  };
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleMainMenu(1)}>
          <a href="#">Top link</a>
        </li>
        <li className={currentMainMenu === 2 ? "open" : ""}>
          <a href="#" onClick={() => handleMainMenu(2)}>
            Top menu 1<span className="arrow"></span>
          </a>
          {currentMainMenu === 2 && (
            <div className="submenu">
              <ul>
                <li>
                  <a href="#">Menu item 1</a>
                </li>
                <li>
                  <a href="#">Menu item 2</a>
                </li>
                <li>
                  <a href="#">Menu item 3</a>
                </li>

                <li className={currentSubMenu === 24 ? "open" : ""}>
                  <a href="#" onClick={() => handleSubMenu(24)}>
                    I Have subitem 1<span className="arrow"></span>
                  </a>
                  {currentSubMenu === 24 && (
                    <div className="submenu">
                      <ul>
                        <li>
                          <a href="#">Menu item 4 </a>
                        </li>
                        <li>
                          <a href="#"> Menu item 5</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className={currentSubMenu === 25 ? "open" : ""}>
                  <a href="#" onClick={() => handleSubMenu(25)}>
                    I Have subitem 1<span className="arrow"></span>
                  </a>
                  {currentSubMenu === 25 && (
                    <div className="submenu">
                      <ul>
                        <li>
                          <a href="#">Menu item 6 </a>
                        </li>
                        <li>
                          <a href="#"> Menu item 7</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className={currentMainMenu === 3 ? "open" : ""}>
          <a href="#" onClick={() => handleMainMenu(3)}>
            Top menu 2<span className="arrow"></span>
          </a>
          {currentMainMenu === 3 && (
            <div className="submenu">
              <ul>
                <li>
                  <a href="#">Menu item 8</a>
                </li>
                <li>
                  <a href="#">Menu item 9</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
