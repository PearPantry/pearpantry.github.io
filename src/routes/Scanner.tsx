function Scanner() {
  return (
    <>
      <h1>Scanner</h1>
      <input type="file" accept="image/*" capture="environment" />
    </>
  );
}

const process = async () => {
  const fetch = require("node-fetch");

  const url = "https://api.veryfi.com/api/v8/partner/documents";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "CLIENT-ID": "",
      AUTHORIZATION: "",
    },
    body: '{"file_url":"https://veryfi-testing-public.s3.us-west-2.amazonaws.com/receipt.jpg"}',
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default Scanner;
