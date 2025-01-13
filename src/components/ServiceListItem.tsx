
export default function ServiceListItem({
  title,
  classes = "text-white",
  iconClass = "stroke-white",
}: any) {
  return (
    <div className="flex items-center gap-2">
      <span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={iconClass}
        >
          <path
            d="M11.5 0.500305L4.5 7.49999L1 4.00031"
            // stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`${classes} text-xs leading-[18px]  tracking-[0.4%]`}>
        {title}
      </span>
    </div>
  );
}
