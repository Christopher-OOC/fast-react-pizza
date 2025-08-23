import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  if (to) {
    return (
      <Link
        to={to}
        className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none active:bg-slate-400"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none active:bg-slate-400"
    >
      {children}
    </button>
  );
}

export default Button;
