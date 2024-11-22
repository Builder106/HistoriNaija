import * as React from "react";

export default function ActionButton({ children, icon }) {
  return (
    <div className="flex mt-3.5 max-w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[254px]">
      <button
        className="overflow-hidden flex-auto gap-2 self-start p-3 mr-0 bg-green-800 rounded-lg border border-solid border-zinc-800 rotate-[-0.005576699580338774rad]"
        tabIndex={0}
      >
        {children}
      </button>
      {icon && (
        <img
          src={icon}
          className="object-contain shrink-0 aspect-[0.96] w-[46px]"
          alt=""
          role="presentation"
        />
      )}
    </div>
  );
}