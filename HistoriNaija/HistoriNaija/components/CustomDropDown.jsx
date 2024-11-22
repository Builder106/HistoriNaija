import * as React from "react";

export default function CustomDropdown({ label, value }) {
  return (
    <button
      className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 py-2.5 w-full text-sm leading-6 whitespace-nowrap bg-white rounded border border-green-800 border-solid max-w-[345px] min-h-[42px] text-slate-700"
      aria-label={`Select ${label}`}
      tabIndex={0}
    >
      <span className="flex-1 shrink self-stretch my-auto basis-0">
        {value}
      </span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/88dde3b52c6d4a0582895a25dd445a34/c761c19b1888cfb757fccd51372b62eeb3bf87e73033bcfd9be23516ac18045c?apiKey=88dde3b52c6d4a0582895a25dd445a34&"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
        role="presentation"
      />
    </button>
  );
}