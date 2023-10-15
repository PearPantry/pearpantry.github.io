function Scanner() {
  return (
    <>
      <h1>Scanner</h1>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={processFile}
      />
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

  const form = new FormData();
  form.append("refresh", "false");
  form.append("incognito", "false");
  form.append("extractTime", "false");
  form.append(
    "file",
    "data:image/jpeg;name=" + file.name + ";base64," + base64
  );
  form.append("extractLineItems", "true");

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      apikey: "e103af406b4311eea8f313266e4aecd5",
    },
    body: form,
  };

  fetch("https://api.taggun.io/api/receipt/v1/verbose/file", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default Scanner;
