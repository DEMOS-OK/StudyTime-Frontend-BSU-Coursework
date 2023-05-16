interface BurgerProps {
  onClick: () => void;
}

const Burger = (props: BurgerProps) => {
  return (
    <div className="absolute inset-y-0 left-3 pt-5 sm:hidden">
      <button
        type="button"
        onClick={props.onClick}
        className="inline-flex items-center justify-center text-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Откройте главное меню</span>

        <svg
          className="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          className="hidden h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Burger;
