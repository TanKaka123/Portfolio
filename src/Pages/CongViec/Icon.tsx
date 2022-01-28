import React from "react";

export const IconProject = ({ color }: any) => {
  return (
    <div>
      <svg
        width="70"
        height="70"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 8C5 7.46957 5.21071 6.96086 5.58579 6.58579C5.96086 6.21071 6.46957 6 7 6H19L24 12H41C41.5304 12 42.0391 12.2107 42.4142 12.5858C42.7893 12.9609 43 13.4696 43 14V40C43 40.5304 42.7893 41.0391 42.4142 41.4142C42.0391 41.7893 41.5304 42 41 42H7C6.46957 42 5.96086 41.7893 5.58579 41.4142C5.21071 41.0391 5 40.5304 5 40V8Z"
          stroke={color === "project" ? "white" : "#548ca3"}
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M28 22L33 27L28 32"
          stroke={color === "project" ? "white" : "#548ca3"}
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 22L15 27L20 32"
          stroke={color === "project" ? "white" : "#548ca3"}
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export const IconResume = ({ color }: any) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 3.75H13.25V11.25H0.75V3.75Z"
        stroke={color === "resume" ? "white" : "#548ca3"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 0.75L7 3.75L10.25 0.75M9.75 6.75V8.25V6.75ZM4.25 6.75V8.25V6.75Z"
        stroke={color === "resume" ? "white" : "#548ca3"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const IconBack = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99972 2.00004C9.9999 1.79149 9.93488 1.5881 9.81375 1.41833C9.69262 1.24856 9.52145 1.12091 9.32418 1.05325C9.12691 0.98558 8.91342 0.981282 8.71359 1.04095C8.51376 1.10063 8.33758 1.22128 8.20972 1.38604L1.20972 10.386C1.07316 10.5616 0.999023 10.7776 0.999023 11C0.999023 11.2224 1.07316 11.4385 1.20972 11.614L8.20972 20.614C8.33758 20.7788 8.51376 20.8995 8.71359 20.9591C8.91342 21.0188 9.12691 21.0145 9.32418 20.9468C9.52145 20.8792 9.69262 20.7515 9.81375 20.5818C9.93488 20.412 9.9999 20.2086 9.99972 20V16.01C15.3787 16.122 17.9627 17.143 19.2607 18.253C20.4947 19.308 20.7207 20.549 20.9557 21.849L21.0167 22.184C21.0616 22.4237 21.1925 22.6388 21.3849 22.7887C21.5772 22.9387 21.8177 23.0131 22.0611 22.9981C22.3045 22.9831 22.5341 22.8797 22.7066 22.7073C22.879 22.5349 22.9826 22.3054 22.9977 22.062C23.1687 19.314 22.9117 15.332 20.9707 12.001C19.0867 8.76804 15.6937 6.28204 9.99972 6.02204V2.00004Z"
        fill="white"
      />
    </svg>
  );
};
