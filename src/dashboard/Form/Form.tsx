"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      {/* EMAIL */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="email@email.com"
          required
        />
      </div>
      {/* First name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account first name" />
        </div>
        <TextInput
          id="firstname"
          type="text"
          placeholder="first name"
          required
        />
      </div>
      {/* Last name */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account last name" />
        </div>
        <TextInput id="lastname" type="text" placeholder="last name" required />
      </div>
      {/* Birth day */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account birth day" />
        </div>
        <TextInput
          id="birthday"
          type="text"
          placeholder="dd-mm-yyyy"
          required
        />
      </div>
      {/* Location */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Account location" />
        </div>
        <TextInput id="location" type="text" placeholder="city" required />
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
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
