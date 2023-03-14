import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Github from "@/components/GitHub";
import { NextPage } from "next";
import { useState, useRef } from "react";
import { text } from "stream/consumers";

const Home: NextPage = () => {

  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const [busy, setBusy] = useState(false);

  async function generateSummary() {
    setBusy(true);

    setBusy(false);
  }

  async function copyToClipboard() {
    navigator.clipboard.writeText(result);
  }

  async function onSubmit(event) {
    event.preventDefault();

    await generateEmail(businessInput, tone);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col pt-8 sm:pt-12">
      <Head>
        <title>Meeting Summarizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
          href="https://github.com/gyurisc/summarizer-tool"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Generate your meeting summaries and todos using chatGPT
        </h1>
        <p className="text-slate-500 mt-5">Countless summaries generated so far.</p>
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="mb-3 w-full px-2">
              <input
                className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                type="text"
                placeholder="Type your message"
                autocomplete="off"
                name="business"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Home;