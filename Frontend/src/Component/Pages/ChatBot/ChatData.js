const flow = {
    start: {
      message: "Who are you?",
      path: "end"
    },
    end: {
      message: (params) => `Hi ${params.userInput}!`,
      chatDisabled: true
    }
    
  }
  export default flow()
