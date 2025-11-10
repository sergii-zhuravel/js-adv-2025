export async function getSwapiData(start, end) {
    try {
      let response = await fetch(`${start}/${end}`);
  
      return {
        status: 'success',
        data: await response.json(),
      };
    } catch {
      return "UPS"
    }
  }
  