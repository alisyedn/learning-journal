import {ProblemDetails} from "@/types";

const withErrorHandler = <R>(handler: (input: any) => Promise<ProblemDetails | R>) =>
  async (input: any): Promise<ProblemDetails | R> => {
    try {
      return await handler(input)
    } catch (error) {
      console.error('Error occurred', error)

      return {
        type: "about:blank",
        title: "Internal Server Error",
        detail: "An unexpected error occurred",
        status: 500
      }
    }
  }


export {withErrorHandler}