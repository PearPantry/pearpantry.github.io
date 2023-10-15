function Scanner() {
  return (
    <>
      <h1>Scanner</h1>
      <input type="file" accept="image/*" capture="environment" onChange={processFile}/>
    </>
  );
}

const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const processFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files![0];

  // Convert to base64 string
  const base64 = await convertBase64(file);
  
  const fetch = require("node-fetch");

  const url = "https://api.veryfi.com/api/v8/partner/documents";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "CLIENT-ID": "vrfLGiSkJwtltbOEIyP9xVXeuTFhGlMsfj019NI",
      AUTHORIZATION: "apikey pearpantry:9fe50c75817cd5382d98d54c96442b00",
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
