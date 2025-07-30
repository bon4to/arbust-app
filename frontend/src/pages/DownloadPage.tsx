import BaseLayout from "../layouts/BaseLayout";
import { FaApple } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <BaseLayout>
    <div className="max-h-screen bg-neutral-800/80 text-white font-sans flex flex-col items-center py-64">
      <main className="text-center">
        <h2 className="text-6xl font-bold leading-tight">
          Your taste, <span className="text-white bg-primary px-2 py-1 rounded-lg mr-1">forever yours</span>.
        </h2>

        <div className="flex justify-center gap-4 mt-10 text-lg">
          <a
            href="/download/ios"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center"
          >
            <FaApple className="mr-2 h-5 w-5" />
            Download for iOS
          </a>
          <button className="bg-neutral-800/80 text-white border border-white px-6 py-3 rounded-full opacity-50 cursor-not-allowed">
            Android (coming soon)
          </button>
        </div>
      </main>
    </div>
    </BaseLayout>
  );
}