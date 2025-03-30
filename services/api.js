export async function getData(functionName) {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/${functionName}`, {
      next: { revalidate: 30 },
    });

    // Check if the response is OK (status 200-299)
    if (!res.ok) {
      throw new Error(
        `API request failed with status ${res.status}: ${res.statusText}`
      );
    }

    const data = await res.json();

    // Check if the response contains valid data
    if (!data) {
      throw new Error("Received empty response from API");
    }

    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);

    // Return a default object to prevent crashes
    return { error: true, message: error.message };
  }
}
