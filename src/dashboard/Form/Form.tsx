"use client";

import { Button, Checkbox, Datepicker, Label, TextInput } from "flowbite-react";
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
    <form
      onSubmit={handleFormSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto"
    >
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
        <Datepicker
          title="Birthday"
          required
          onChange={(e) =>
            /* setUserData({ ...userData, birth_day: e.target.value }) */
            console.log(e)
          }
          /* value={userData.birth_day} */
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
