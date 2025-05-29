export default function setCookieOnReq(cookies) {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      // Note: The correct header name is 'Cookie' (capital C)
      Cookie: `accessToken=${accessToken?.value}; refreshToken=${refreshToken?.value}`,
    },
  };
  return options;
}
