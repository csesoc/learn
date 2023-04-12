export const HomePageFactory = () => {
  const blocks = [];
  if (!blocks || blocks.length < 1) {
    return <p>addbashj</p>;
  }
  return (
    <>
      {blocks.map((block) => {
        switch (block.__component) {
          case "ui.button":
            return <button>nasddjknask</button>;
          case "ui.hero":
            return <p>hero</p>;
          default:
            return <p>ajdnaskjn</p>;
        }
      })}
    </>
  );
};
