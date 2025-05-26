export async function middlewareAuth(req) {
  // Safely get token values
  const accessToken = req.cookies?.get("accessToken")?.value;
  const refreshToken = req.cookies?.get("refreshToken")?.value;

  // Check if tokens exist
  if (!accessToken || !refreshToken) {
    return null;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          // Note: The correct header name is 'Cookie' (capital C)
          Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
        },
      }
    );

    // Check if request was successful
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    // Don't forget to await the json() call!
    const { data } = await res.json();
    return data?.user || null;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
}
