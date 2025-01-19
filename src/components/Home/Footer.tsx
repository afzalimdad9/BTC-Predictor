import { CodeIcon, GithubIcon } from "../../assets/icons";

export function Footer() {
  return (
    <footer className="flex justify-center flex-col gap-3 p-5 items-center bg-zinc-800">
      <a
        href="https://afzalimdad9.vercel.app/"
        target="_blank"
        className="flex items-center text-zinc-400 duration-150 ease-linear hover:text-zinc-300"
      >
        <span className="pr-1">
          <GithubIcon />
        </span>
        Created by Afzal Imdad
      </a>
      <a
        href="https://github.com/afzalimdad9/BTC-Predictor"
        target="_blank"
        className="flex items-center text-zinc-400 duration-150 ease-linear hover:text-zinc-300"
      >
        <span className="pr-1">
          <CodeIcon />
        </span>
        Source code on GitHub
      </a>
    </footer>
  );
}
