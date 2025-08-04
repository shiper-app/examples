import Image from "next/image";
import ClientSideTest from "./ClientSideTest";
import Link from "next/link";

// Server-side/Runtime environment variables (available only on the server)
const serverEnvVars = {
  RUNTIME_ENVVAR: process.env.RUNTIME_ENVVAR,
  NODE_ENV: process.env.NODE_ENV,
};

// Client-side/Build-time environment variables (prefixed with NEXT_PUBLIC_)
const clientEnvVars = {
  NEXT_PUBLIC_BUILDTIME_ENVVAR: process.env.NEXT_PUBLIC_BUILDTIME_ENVVAR,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Environment Variables Demo Section */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Environment Variables Demo
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Demonstrating runtime vs build-time environment variables in Next.js
          </p>
        </div>

        {/* Runtime Environment Variables */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
            Runtime Environment Variables (Server-Side Only)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            These variables are only available on the server at runtime and are
            NOT exposed to the browser:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(serverEnvVars).map(([key, value]) => (
              <div
                key={key}
                className="bg-white dark:bg-gray-900 rounded p-4 border-l-4 border-blue-500"
              >
                <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm font-mono">
                  {key}
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-mono text-sm mt-1">
                  {value || "<undefined>"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build-time Environment Variables */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-200">
            Build-time Environment Variables (Client-Side Accessible)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            These variables are prefixed with NEXT_PUBLIC_ and are available in
            the browser:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(clientEnvVars).map(([key, value]) => (
              <div
                key={key}
                className="bg-white dark:bg-gray-900 rounded p-4 border-l-4 border-green-500"
              >
                <div className="font-semibold text-green-700 dark:text-green-300 text-sm font-mono">
                  {key}
                </div>
                <div className="text-gray-800 dark:text-gray-200 font-mono text-sm mt-1">
                  {value || "<undefined>"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client-Side Runtime Access */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">
            Client-Side Runtime Access Test
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Testing which variables are accessible in the browser JavaScript:
          </p>
          <ClientSideTest />
        </div>
      </div>

      {/* Shiper Footer */}
      <div className="mt-16 flex justify-center w-full">
        <div className="flex gap-2 items-center text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">Powered by</p>
          <Link href={"https://shiper.app"} className="flex gap-2 items-center group">
            <Image
              src="https://shiper.app/logo/shiper_grad.svg"
              alt="Shiper"
              width={34}
              height={34}
            />
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors">
              Shiper
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
