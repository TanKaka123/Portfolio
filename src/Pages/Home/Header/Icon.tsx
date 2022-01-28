import React from "react";

export const IconInfor = ({color}: any) => {
  return (
    <div>
      <svg
        width="70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 11.1V8C21 6.9 20.1 6 19 6H11L9 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H10.2C11.4 21.8 13.6 23 16 23C19.9 23 23 19.9 23 16C23 14.1 22.2 12.4 21 11.1ZM9.3 18H3V8H19V9.7C18.1 9.2 17.1 9 16 9C12.1 9 9 12.1 9 16C9 16.7 9.1 17.4 9.3 18ZM16 21C13.2 21 11 18.8 11 16C11 13.2 13.2 11 16 11C18.8 11 21 13.2 21 16C21 18.8 18.8 21 16 21ZM17 14H15V12H17V14ZM17 20H15V15H17V20Z"
          fill={color==='infor'?"white":"#548ca3"}
        />
      </svg>
    </div>
  );
};

export const IconWork = ({color}: any) => {
  return (
    <div>
      <svg
        width= "70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3ZM4 19V7H20L20.002 19H4Z"
          fill={color==='work'?"white":"#548ca3"}
        />
        <path
          d="M9.29294 9.29297L5.58594 13L9.29294 16.707L10.7069 15.293L8.41394 13L10.7069 10.707L9.29294 9.29297ZM14.7069 9.29297L13.2929 10.707L15.5859 13L13.2929 15.293L14.7069 16.707L18.4139 13L14.7069 9.29297Z"
          fill={color==='work'?"white":"#548ca3"}
        />
      </svg>
    </div>
  );
};

export const IconContact = ({color}: any) => {
  return (
    <div className="">
      <svg
        width="70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 2H22V18H14L6 22V18H1V2ZM6 10H7V11H6V10ZM11 10H12V11H11V10ZM16 10H17V11H16V10Z"
          stroke={color==='contact'?"white":"#548ca3"}
          stroke-width="2"
        />
      </svg>
    </div>
  );
};
