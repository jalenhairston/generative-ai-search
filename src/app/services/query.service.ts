import {inject, Injectable} from '@angular/core';

import {GoogleGenerativeAI} from "@google/generative-ai";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private AI_INFO = {
    gemini: {
      id: 1,
      name: "Gemini"
    }
  }
  genAI = new GoogleGenerativeAI(environment.geminiApiKey)
  model = this.genAI.getGenerativeModel({model: "gemini-pro"})
  data: any
  dataArray: any[] = []


  async generateResult(query: string) {
    const prompt = `give a json structure with a response, image src link as 'image', and url to google for the query: '${query}'`

    const result = await this.model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    let data = JSON.parse(text.substring(
      text.indexOf("{"),
      text.indexOf("}") + 1))
    data.name = this.AI_INFO.gemini.name
    data.id = this.AI_INFO.gemini.id
    this.dataArray = [data]
    return this.dataArray
  }

  getResultById(id: string): any {
    return this.dataArray.find((element: any) => element.id === parseInt(id))
  }


}
