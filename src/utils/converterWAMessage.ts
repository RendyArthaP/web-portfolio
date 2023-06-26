export const converterMessage = (text: string) => {
  let textMsg = text.split("%20").join(" ");

  return textMsg;
};

export const textMsg =
  "Hello%20Rendy,%0AI%20want%20to%20offering%20you%20a%20job.%20Can%20we%20set%20a%20time%20to%20talk%20further?%0AThank%20you!";
