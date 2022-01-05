const arrayOne = [
  { value: "4a55eff3-1e0d-4a81-9105-3ddd7521d642", display: "Jamsheer" },
  { value: "644838b3-604d-4899-8b78-09e4799f586f", display: "Muhammed" },
  { value: "b6ee537a-375c-45bd-b9d4-4dd84a75041d", display: "Ravi" },
  { value: "e97339e1-939d-47ab-974c-1b68c9cfb536", display: "Ajmal" },
  { value: "a63a6f77-c637-454e-abf2-dfb9b543af6c", display: "Ryan" },
  { value: "a63a6f77-c637-454e-abf2-dfb9b543af6c", display: "Ryasdsadan" },
];

const arrayTwo = [
  { value: "4a55eff3-1e0d-4a81-9105-3ddd7521d642", display: "Jamsheer" },
  { value: "644838b3-604d-4899-8b78-09e4799f586f", display: "Muhammed" },
  { value: "b6ee537a-375c-45bd-b9d4-4dd84a75041d", display: "Ravi" },
  { value: "e97339e1-939d-47ab-974c-1b68c9cfb536", display: "Ajmal" },
  { value: "e97339e1-939d-47ab-974c-asdad", display: "sddsd" },
];

const results = arrayOne.filter(
  ({ value: el1 }) => !arrayTwo.some(({ value: el2 }) => el2 === el1)
);

console.log(results);

//MSG_TYPE (newAsset, payment, newProgram, enabled)

const msgFormatter = (msg) => {
  const { msgType, program, platform, assets, others } = msg;

  let finalMessage = "";

  switch (msgType) {
    case "newAsset":
      finalMessage += `New Assets for ${program} on ${platform}!`;

      assets.map(({ target }) => {
        finalMessage += `\n${target}`;
      });
      return finalMessage;

    case "newProgram":
      finalMessage += `New Program called ${program} is on ${platform}!\nAssets:`;

      assets.map(({ target }) => {
        finalMessage += `\n${target}`;
      });
      return finalMessage;

    case "payment":
      finalMessage += `Program ${program} payout changed from $${others[1]} to $${others[0]}\nAssets:`;

      assets.map(({ target }) => {
        finalMessage += `\n${target}`;
      });
      return finalMessage;

    default:
      break;
  }
};
