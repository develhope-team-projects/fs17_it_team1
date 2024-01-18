import { Button, Label, Radio, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { NormalButton } from "../../shared/NormalButton";
import InputField from "../../shared/InputField";
import { customTheme2 } from "../../loginESubscription/Subscription";

export default function RatingForm(props: any) {
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUserData: any = {
      productId: props.productId,
      title: event.target[1].value,
      comment: event.target[2].value,
      rating: event.target[0].value,
      userId: props.userId,
    };

    const response = await fetch("http://localhost:3001/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });

    alert("Rating added Succefully");
    return response.json();
  }
  return (
    <div className=" w-full bg-beige-chiaro relative z-9 bg-opacity-50">
      <div className="bg-beige-scuro gap-6 relative z-10 rounded-md">
        <form
          className=" py-8 bg-beige-scuro gap-6 relative z-10 rounded-md"
          onSubmit={handleFormSubmit}
        >
          <p className="text-white px-5 text-center">
            La tua opinione conta sempre!
          </p>
          <div className="flex gap-6">
            <InputField
              type="number"
              id="rating"
              name="rating"
              label="Rating"
            />
          </div>
          <div className="flex my-6">
            <InputField type="text" id="titolo" name="titolo" label="Titolo" />
          </div>
          <div className="my-6">
            {" "}
            <InputField
              type="text"
              id="descrizione"
              name="descrizione"
              label="Descrizione"
            />
          </div>

          <NormalButton type="submit" content="Send" />
        </form>
      </div>
    </div>
  );
}
