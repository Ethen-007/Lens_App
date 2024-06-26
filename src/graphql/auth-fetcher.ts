// logic that we want to run every time we send a request
//to the lens graphql server
// lens graphql server endpoint
export const fetcher= <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch("./schema.graphql/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options
          //Auth header here.
      },
      body: JSON.stringify({
        query,
        variables
      })
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0] || {}
      throw new Error(message || 'Error…')
    }

    return json.data
  }
}