import React from "react";
import "../header/Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="header_top">
          <div className="header_top_left">
            <div className="logo">
              <img src="/images/bi.svg" alt="#" />
            </div>
            <ul>
              <li>
                <a href="#">웹진</a>
              </li>
              <li>
                <a href="#" className="header_focus">
                  쇼핑몰
                </a>
              </li>
              <li>
                <a href="#">커뮤니티</a>
              </li>
            </ul>
          </div>
          <div className="header_top_right">
            <ul>
              <li>
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="htr_md">
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0"
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.4219 4.62109L19.1324 13.1145C18.8971 13.9875 18.1055 14.594 17.2014 14.594H9.39346C8.48845 14.594 7.69622 13.9863 7.46175 13.1121L5.68435 6.48588L5.56054 6.06126C5.31171 5.20784 4.52945 4.62109 3.6405 4.62109H2.42188"
                        stroke="var(--colors-icon-black)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <ellipse
                        cx="8.40265"
                        cy="18.9185"
                        rx="1.63116"
                        ry="1.62162"
                        stroke="var(--colors-icon-black)"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></ellipse>
                      <ellipse
                        cx="18.1898"
                        cy="18.9185"
                        rx="1.63116"
                        ry="1.62162"
                        stroke="var(--colors-icon-black)"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      ></ellipse>
                    </svg>
                  </i>
                  <span className="absolute left-[5px] top-0 w-[16px] text-center text-[10px] font-semibold leading-normal text-neutral-900">
                    0
                  </span>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="cursor-pointer max-lg:hidden"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <a href="#">로그인</a>
          </div>
        </div>
        <div className="header_bottom">
          <ul>
            <li>
              <a href="#" className="header_focus">
                홈
              </a>
            </li>

            <li>
              <a href="#">도서</a>
            </li>

            <li>
              <a href="#">성물</a>
            </li>

            <li>
              <a href="#">주얼리</a>
            </li>

            <li>
              <a href="#">이벤트</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
