interface Props {
  name?: string;
  type?: "delete" | "edit";
  handleFunc?: (e?) => void;
}
function Button({ name, type, handleFunc }: Props) {
  return (
    <button
      className={`bg-[#00684A] text-white ${
        name ? "w-[150px]" : "w-auto p-2 text-center mx-2"
      }  ${
        name ? "h-[35px]" : "h-auto"
      }  rounded-full font- text-base text-center `}
      onClick={handleFunc}
      type="button"
    >
      <span className="flex justify-center items-center">
        {type === "delete" && (
          <svg
            className="h-[18px] w-[18px] text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <polyline points="3 6 5 6 21 6" />{" "}
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" />{" "}
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        )}

        {type === "edit" && (
          <svg
            className="h-[18px] w-[18px] text-white"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />{" "}
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
        )}
        {name && <span className="mx-1">{name}</span>}
      </span>
    </button>
  );
}

export default Button;
