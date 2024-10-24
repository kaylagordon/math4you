export const getAnswer = (operation: string, numbers: number[]) => {
  return fetch(`http://localhost:3001/${operation}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ numbers })
  })
  .then(response => response.json())
}