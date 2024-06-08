import { Dialog } from "../domain/entities/Dialog";
import { Message } from "../domain/entities/Message";
import { ChatRepository } from "../infra/ChatRepository";
import { generateBotResponse } from "./useCases/useCase";


export class ChatService {
    private chatRepository: ChatRepository;

    constructor() {
        this.chatRepository = new ChatRepository();
    }

    public async sendMessage(userMessage: string, dialogs: Dialog[]): Promise<Message[]> {
        const userMessageObj: Message = {
            text: userMessage,
            sender: 'user',
            tipo: 1,
            similaridade: 100
        };

        const botResponse = generateBotResponse(userMessageObj, dialogs);
        return [userMessageObj, botResponse];
    }
}
