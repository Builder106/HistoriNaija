import { useState } from "react";
import CustomDropdown from "./components/CustomDropDown";
import ActionButton from "./components/ActionButton";

export default function App() {
  const handleClick = async (event: React.MouseEvent) => {
    await sendDataToAI(
      "Ladipo is a big goat, even though he is a boss. Go brush werey"
    );
  };

  const sendDataToAI = async (input: string) => {
    try {
      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      console.log("this is the result: " + data.result); // "AI processed: Hello AI"
      setText(data.result);
    } catch (error) {
      console.error("Error communicating with backend:", error);
    }
  };
  let [text, setText] = useState("select text for detailed explanation");
  return (
    <main className="flex flex-col rounded-none w-[454px] max-w-[500px]">
      <section className="flex flex-col items-center pt-3.5 pr-7 pb-11 pl-3 w-full bg-neutral-50">
        <header className="self-stretch">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/88dde3b52c6d4a0582895a25dd445a34/81e230cae44fe86ad230d7347086026836d8544197f37ba758ffa7c0912b87ed?apiKey=88dde3b52c6d4a0582895a25dd445a34&"
                className="object-contain shrink-0 max-w-full aspect-square w-[114px]"
                alt="HistoriNaija Logo"
              />
              <h1 className="text-4xl tracking-tighter text-center text-green-800">
                HistoriNaija
              </h1>
            </div>
            <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-6 w-full">
                <div className="flex mt-10 ml-5 max-w-full leading-none font-[number:var(--sds-typography-body-font-weight-regular)] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)] w-[190px]">
                  <button
                    className="overflow-hidden gap-2 self-start p-3 mr-0 bg-green-800 rounded-lg border border-solid border-zinc-800"
                    tabIndex={0}
                    onClick={handleClick}
                  >
                    Simplify Content
                  </button>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/88dde3b52c6d4a0582895a25dd445a34/8d876f66a653e45fffbc3e2cd5ed0d306db6aa61c91212b93b6f23b88c181393?apiKey=88dde3b52c6d4a0582895a25dd445a34&"
                    className="object-contain shrink-0 aspect-[0.85] w-[35px]"
                    alt=""
                    role="presentation"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          className="overflow-hidden gap-2 self-stretch px-3 py-20 mt-4 w-full leading-none bg-green-800 rounded-lg border border-solid border-zinc-800 font-[number:var(--sds-typography-body-font-weight-regular)] max-w-[321px] min-h-[171px] text-[color:var(--sds-color-text-brand-on-brand)] text-[length:var(--sds-typography-body-size-medium)]"
          role="region"
          aria-label="Text Selection Area"
        >
          {text}
        </section>

        <ActionButton icon="https://cdn.builder.io/api/v1/image/assets/88dde3b52c6d4a0582895a25dd445a34/5ae38f586db18badeaa05ec92a842e0c0339cdcf87e82c7f6fabcfc6f3352654?apiKey=88dde3b52c6d4a0582895a25dd445a34&">
          Start Conversation Mode
        </ActionButton>

        <h2 className="mt-4 leading-none text-black font-[number:var(--sds-typography-body-font-weight-regular)] text-[length:var(--sds-typography-body-size-medium)]">
          <strong>Customization Options</strong>
        </h2>

        <nav className="flex flex-col gap-12 w-full mt-12">
          <CustomDropdown label="Level Selection" value="Basic" />
          <CustomDropdown label="Language Selection" value="English" />
        </nav>

        <img
          src="https://cdn.builder.io/api/v1/image/assets/88dde3b52c6d4a0582895a25dd445a34/b1244b2a289452d4fc8e62415561d4d0d79fe80ed83e2690558b9176cea176b6?apiKey=88dde3b52c6d4a0582895a25dd445a34&"
          className="object-contain mt-6 max-w-full aspect-[3.13] w-[125px]"
          alt="HistoriNaija Footer"
        />
      </section>
    </main>
  );
}
