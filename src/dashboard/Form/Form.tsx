"use client";

import { Button, Checkbox, Datepicker, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import InputField from "../../shared/InputField";
import {
  customTheme,
  customTheme3,
} from "../../loginESubscription/Subscription";
import { NormalButton } from "../../shared/NormalButton";
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
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    function formatDateToYYYYMMDD(dateString: any) {
      // Create a new Date object using the input date string
      const date = new Date(dateString);

      // Extract year, month, and day components from the Date object
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 to month since it's zero-based
      const day = String(date.getDate()).padStart(2, "0");

      // Construct the date in 'YYYY-MM-DD' format
      const formattedDate = `${year}-${month}-${day}`;

      return formattedDate;
    }

    const birthday = formatDateToYYYYMMDD(event.target[3].value);

    const newUserData: UserData = {
      email: event.target[0].value,
      first_name: event.target[1].value,
      last_name: event.target[2].value,
      birth_day: birthday,
      location: event.target[4].value,
      gender: event.target[5].value,
    };

    console.log(newUserData);

    const response = await fetch("http://localhost:3001/users", {
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
    <div>
      {" "}
      <form
        onSubmit={handleFormSubmit}
        className="flex max-w-md flex-col gap-4 mx-auto bg-beige-scuro gap-6 relative z-10 rounded-md p-8"
      >
        {/* EMAIL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account email" />
          </div>
          <InputField id="email" type="email" label="email@email.com" />
        </div>
        {/* First name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account first name" />
          </div>
          <InputField id="first_name" type="text" label="first name" />
        </div>
        {/* Last name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account last name" />
          </div>
          <InputField id="last_name" type="text" label="last name" />
        </div>
        {/* Birth day */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account birth day" />
          </div>
          <Datepicker
            title="Birthday"
            required
            theme={{ ...customTheme, ...customTheme3 }}
          />
        </div>
        {/* Location */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account location" />
          </div>
          <InputField id="location" type="text" label="city" />
        </div>
        {/* Gender */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Account gender" />
          </div>
          <InputField id="gender" type="text" label="male or female" />
        </div>
        <div className="mx-auto">
          <NormalButton type="submit" content="Create" />
        </div>
      </form>
    </div>
  );
}
