"use client";

import {
  Button,
  Checkbox,
  Datepicker,
  FileInput,
  Label,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import InputField from "../../shared/InputField";
import { NormalButton } from "../../shared/NormalButton";
/* Interfaccia da definire */
interface UserData {
  name: string;
  description: string;
  price: string;
  discount: string;
}
/* Missing img for the form */
export function ProductForm() {
  const initialUserData: UserData = {
    name: "",
    description: "",
    price: "",
    discount: "",
  };
  const [userData, setUserData] = useState(initialUserData);
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUserData: UserData = {
      name: event.target[0].value,
      description: event.target[1].value,
      price: event.target[2].value,
      discount: event.target[3].value ? event.target[3].value : null,
    };

    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });
    setUserData(initialUserData);
    return response.json();
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto bg-beige-scuro gap-6 relative z-10 rounded-md p-8"
    >
      {/* Name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="name" />
        </div>
        <InputField id="name" type="text" label="product name" />
      </div>
      {/* Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="description" />
        </div>
        <InputField id="description" type="text" label="product description" />
      </div>
      {/* Price */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="price" />
        </div>
        <InputField id="price" type="text" label="" />
      </div>
      {/* Discount */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="discount" value="discount" />
        </div>
        <InputField id="discount" type="text" label="" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Upload file" />
        </div>
        <FileInput id="file-upload" />
      </div>
      <div className="mx-auto">
        <NormalButton type="submit" content="Create" />
      </div>
    </form>
  );
}
