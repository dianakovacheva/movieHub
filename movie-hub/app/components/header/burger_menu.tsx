export default function BurgerMenu() {
  return (
    <div className="menu dropdown flex-none text-base dropdown-content rounded-box z-1">
      <button
        className="btn-ghost btn-circle flex items-center font-bold hover:cursor-pointer gap-1"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <span className="hidden sm:flex">Menu</span>
      </button>
      <ul
        tabIndex={0}
        className="menu xl:menu-horizontal dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-200 lg:min-w-max"
      >
        <li>
          <a>Solutions</a>
          <ul>
            <li>
              <a>Design</a>
            </li>
            <li>
              <a>Development</a>
            </li>
            <li>
              <a>Hosting</a>
            </li>
            <li>
              <a>Domain register</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Enterprise</a>
          <ul>
            <li>
              <a>CRM software</a>
            </li>
            <li>
              <a>Marketing management</a>
            </li>
            <li>
              <a>Security</a>
            </li>
            <li>
              <a>Consulting</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li>
              <a>UI Kit</a>
            </li>
            <li>
              <a>WordPress themes</a>
            </li>
            <li>
              <a>WordPress plugins</a>
            </li>
            <li>
              <a>Open source</a>
              <ul>
                <li>
                  <a>Auth management system</a>
                </li>
                <li>
                  <a>VScode theme</a>
                </li>
                <li>
                  <a>Color picker app</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            <li>
              <a>Press kit</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
