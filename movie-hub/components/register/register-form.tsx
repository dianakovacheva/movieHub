import { signUp } from "../../app/actions/auth";

export function RegisterForm({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signUp(formData);
      }}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@acme.com"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 text-gray-800 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
        {/* {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )} */}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 text-gray-800 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
        {/* {state?.errors?.password && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )} */}
      </div>
      {/* {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )} */}

      {children}
    </form>
  );
}
