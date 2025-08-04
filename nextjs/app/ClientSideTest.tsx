"use client";
import { useEffect, useState } from "react";

export default function ClientSideTest() {
  const [mounted, setMounted] = useState(false);
  const [clientBuildtime, setClientBuildtime] = useState('Loading...');
  const [clientRuntime, setClientRuntime] = useState('Loading...');

  useEffect(() => {
    setMounted(true);
    // Test access to NEXT_PUBLIC_ variable (should work)
    setClientBuildtime(process.env.NEXT_PUBLIC_BUILDTIME_ENVVAR || 'undefined');
    
    // Test access to runtime variable (should be undefined in browser)
    setClientRuntime(process.env.RUNTIME_ENVVAR || 'undefined (as expected - server only)');
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded p-4">
        <div className="font-mono text-sm">
          <div className="mb-4">
            <strong>NEXT_PUBLIC_BUILDTIME_ENVVAR (should be accessible):</strong>
            <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              Loading...
            </div>
          </div>
          <div>
            <strong>RUNTIME_ENVVAR (should be undefined - server only):</strong>
            <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
              Loading...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded p-4">
      <div className="font-mono text-sm">
        <div className="mb-4">
          <strong>NEXT_PUBLIC_BUILDTIME_ENVVAR (should be accessible):</strong>
          <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
            {clientBuildtime}
          </div>
        </div>
        <div>
          <strong>RUNTIME_ENVVAR (should be undefined - server only):</strong>
          <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded">
            {clientRuntime}
          </div>
        </div>
      </div>
    </div>
  );
}
