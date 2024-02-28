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
  searchParameters: any


  async generateResult(query: string) {
    let prompt = this.generatePrompt(query);
    const result = await this.model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    let data: any = {
      response: text,
      name: this.AI_INFO.gemini.name,
      id: this.AI_INFO.gemini.id
    }
    this.dataArray = [data]
    return this.dataArray
  }

  getResultById(id: string): any {
    return this.dataArray.find((element: any) => element.id === parseInt(id))
  }

  generatePrompt(query: string): string {
    console.log(this.searchParameters)
    let defaultString = "Default"
    let prompt: string = `generate a response about ${query} that is no more than 6 sentences long`
    if (!this.searchParameters) {
      return prompt
    }
    if (this.searchParameters.format !== defaultString) {
      prompt = ` generate a list of ${this.searchParameters.format} about ${query}`
    }
    if (this.searchParameters.tone !== defaultString) {
      prompt += `, delivered in a ${this.searchParameters.tone} tone`
    }
    if (this.searchParameters.length === "Default") {
      prompt += `, that is no more than 6 sentences long`
    }
    else if (this.searchParameters.length === "Short") {
      prompt += ` that is 1-2 sentences long`
    }
    else if (this.searchParameters.length === "Medium") {
      prompt += ` that is 3-4 sentences long`
    }
    else if (this.searchParameters.length === "Long") {
      prompt += ` that is 4+ sentences long`
    }
    if (this.searchParameters.detail === "Simplified") {
      prompt += `, explained at a simplified level of detail`
    }
    else if (this.searchParameters.detail !== defaultString) {
      prompt += `, explained at an ${this.searchParameters.detail} level of detail`
    }
    return prompt
  }


  setSearchParameters(parameters: any) {
    this.searchParameters = parameters
  }
}
