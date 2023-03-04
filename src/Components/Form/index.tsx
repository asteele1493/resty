import "./Form.scss";
import { useState } from "react";
import { RequestParams } from "../../App";


const Form = ({ handleApiCall }:{handleApiCall:(RequestParams:RequestParams) => void}) => {
 
  const [method, setMethod] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    handleApiCall(formData);
    console.log(method, url);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>

        <label className="methods">
          <input
            type="radio"
            value="GET"
            name="method"
            checked={method === "GET"}
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          GET
        </label>

        <label className="methods">
          <input
            type="radio"
            value="POST"
            name="method"
            checked={method === "POST"}
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          POST
        </label>

        <label className="methods">
          <input
            type="radio"
            value="PUT"
            name="method"
            checked={method === "PUT"}
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          PUT
        </label>

        <label className="methods">
          <input
            type="radio"
            value="PATCH"
            name="method"
            checked={method === "PATCH"}
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          PATCH
        </label>

        <label className="methods">
          <input
            type="radio"
            value="DELETE"
            name="method"
            checked={method === "DELETE"}
            onChange={(e) => setMethod(e.target.value)}
          />{" "}
          DELETE
        </label>
      </form>
    </>
  );
};

export default Form;
