import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
 

const NavMenuMobile = ({ menuopen, secNavData }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMenusubL, setOpenMenusubL] = useState(null);

  return (
    <div
      className={`xl:my-4 md:w-[500px] w-72 fixed top-20 right-8 bg-[#560606] text-white shadow-lg transition-opacity duration-300 ease-in-out max-h-screen overflow-y-auto ${
        menuopen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full">
        {secNavData.map((nav, index) => (
          <div key={index} className="font-semibold">
            {nav.submenu ? (
              <div>
                <h1
                  className="cursor-pointer p-4 flex justify-between items-center"
                  onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                >
                  {nav.name}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openSubmenu === index ? "rotate-180" : ""
                    }`}
                  />
                </h1>
                {openSubmenu === index && (
                  <div className="bg-[#e8b910] mt-2 text-[#560606]">
                    {nav.submenu.map((sub) => (
                      <div key={sub.id}>
                        {sub.menusubL ? (
                          <div>
                            <h2
                              className="cursor-pointer font-semibold py-4 px-8 flex justify-between items-center"
                              onClick={() => setOpenMenusubL(openMenusubL === sub.id ? null : sub.id)}
                            >
                              {sub.name}
                              <FaChevronDown
                                className={`transition-transform duration-300 ${
                                  openMenusubL === sub.id ? "rotate-180" : ""
                                }`}
                              />
                            </h2>
                            {openMenusubL === sub.id && (
                              <ul className="bg-[#560606] text-white">
                                {sub.menusubL.map((item) => (
                                  <li key={item.id} className="py-4 px-10">
                                    <a href={item.link}>{item.name}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <a href={sub.link} className="py-4 block px-8">
                            {sub.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a href={nav.link || "#"} className="p-4 block">
                {nav.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenuMobile;
