import {inject, Injectable} from '@angular/core';

import {GoogleGenerativeAI} from "@google/generative-ai";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  genAI = new GoogleGenerativeAI(environment.geminiApiKey)
  model = this.genAI.getGenerativeModel({model: "gemini-pro"})
  data: any
  dataArray: any[] = []


  async generateResult(query: string) {
    const prompt = `give a json structure with a title, description, image src link, and url to google for the search: '${query}'`

    const result = await this.model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    this.data = JSON.parse(text.substring(
      text.indexOf("{"),
      text.indexOf("}") + 1))
    for (let i = 0; i < 21; i++) {
      this.dataArray[i] = this.data
      this.dataArray[i].id = i + 1
    }
    console.log(this.dataArray)
    return this.dataArray
  }

  getResultById(id: string): any {
    console.log(this.dataArray)
    return this.dataArray.find((element: any) => element.id === parseInt(id))
  }


}
