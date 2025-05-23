import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500">
      <div className="grow text-left">
        SONG (
        <A target="_blank" href="mailto://zhousongjie@weideya.tech">
          @周颂杰
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/1noob/note.jackey.love">
          Source
        </A>
      </div>
    </footer>
  );
}
