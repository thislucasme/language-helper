import { Dialog } from "../../domain/entities/Dialog";
import { Message } from "../../domain/entities/Message";
import { similarityPercentage } from "./stringSimilarity";

export const generateBotResponse = (userMessage: Message, dialogs: Dialog[]): Message => {
  const matchedDialog = dialogs.find(dialog => dialog.question.toLowerCase() === userMessage.text.toLowerCase());
  let bestSimilaridade = 0;
  let dialogResponse: Dialog = { id: 0, question: "", response: "" }
  dialogs.forEach(element => {
    const similarity = similarityPercentage(userMessage.text, element?.question)
    if (bestSimilaridade < similarity) {
      bestSimilaridade = similarity
      dialogResponse = element
    }
  });
  if (bestSimilaridade > 70) {
    return {
      text: dialogResponse.response,
      sender: "bot",
      tipo: 3,
      similaridade: bestSimilaridade
    };
  } else {
    return {
      text: "Desculpe, não entendi sua pergunta.",
      sender: "bot",
      tipo: 3,
      similaridade: 0
    };
  }
}