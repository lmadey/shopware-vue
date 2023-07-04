export const postData = async <T>(url: string, body: object) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res.json() as T
  } catch (error) {
    alert(error)
  }
}
