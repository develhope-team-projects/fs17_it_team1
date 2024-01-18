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

    console.log(newUserData);

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
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
      {/* Name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="product name"
          required
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          value={userData.name}
        />
      </div>
      {/* Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="description" />
        </div>
        <TextInput
          id="description"
          type="text"
          placeholder="product description"
          required
          onChange={(e) =>
            setUserData({ ...userData, description: e.target.value })
          }
          value={userData.description}
        />
      </div>
      {/* Price */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="price" />
        </div>
        <TextInput
          id="price"
          type="text"
          placeholder=""
          required
          onChange={(e) => setUserData({ ...userData, price: e.target.value })}
          value={userData.price}
        />
      </div>
      {/* Discount */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="discount" value="discount" />
        </div>
        <TextInput
          id="discount"
          type="number"
          placeholder=""
          onChange={(e) =>
            setUserData({ ...userData, discount: e.target.value })
          }
          value={userData.discount}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="file-upload" value="Upload file" />
        </div>
        <FileInput id="file-upload" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
