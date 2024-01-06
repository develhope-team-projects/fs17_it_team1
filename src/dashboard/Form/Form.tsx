"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
/* Interfaccia da definire */
interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  birth_day: string;
  location: string;
  gender: string;
}
export function Form() {
  const initialUserData: UserData = {
    email: "",
    first_name: "",
    last_name: "",
    birth_day: "",
    location: "",
    gender: "",
  };
  const [userData, setUserData] = useState(initialUserData);
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(userData);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // You may or may not need this depending on your use case
      })
      .then((data) => {
        console.log("Success:", data);
        setUserData(initialUserData);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error if needed
      });
    setUserData(initialUserData);
  }
  return (
    <form onSubmit={handleFormSubmit} className="flex max-w-md flex-col gap-4">
      {/* EMAIL */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="email@email.com"
          required
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
        />
      </div>
      {/* First name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account first name" />
        </div>
        <TextInput
          id="first_name"
          type="text"
          placeholder="first name"
          required
          onChange={(e) =>
            setUserData({ ...userData, first_name: e.target.value })
          }
          value={userData.first_name}
        />
      </div>
      {/* Last name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account last name" />
        </div>
        <TextInput
          id="last_name"
          type="text"
          placeholder="last name"
          required
          onChange={(e) =>
            setUserData({ ...userData, last_name: e.target.value })
          }
          value={userData.last_name}
        />
      </div>
      {/* Birth day */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account birth day" />
        </div>
        <TextInput
          id="birth_day"
          type="text"
          placeholder="dd-mm-yyyy"
          required
          onChange={(e) =>
            setUserData({ ...userData, birth_day: e.target.value })
          }
          value={userData.birth_day}
        />
      </div>
      {/* Location */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account location" />
        </div>
        <TextInput
          id="location"
          type="text"
          placeholder="city"
          required
          onChange={(e) =>
            setUserData({ ...userData, location: e.target.value })
          }
          value={userData.location}
        />
      </div>
      {/* Gender */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account gender" />
        </div>
        <TextInput
          id="gender"
          type="text"
          placeholder="male or female"
          required
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
          value={userData.gender}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
