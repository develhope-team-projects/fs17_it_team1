"use client";
import { Label, Radio, Datepicker } from "flowbite-react";
import InputField from "../shared/InputField";
import { NormalButton } from "../shared/NormalButton";
import type { CustomFlowbiteTheme } from "flowbite-react";
import "./Subscription.css";
import { useState } from "react";
import useUserData, { UserDash } from "../dashboard/UsersDashboard/useUserData";

export const customTheme: CustomFlowbiteTheme["datepicker"] = {
  root: {
    base: "relative",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "bg-orange-300 rounded-lg border-2 border-beige-scuro",
    },
    header: {
      base: "",
      title: "",
      selectors: {
        base: "flex justify-between mb-2",
        button: {
          base: "text-sm rounded-lg font-semibold py-2.5 px-5 bg-giallo text-nero",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "flex mt-2 space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium ",
        today: "bg-giallo text-nero",
        clear: "bg-giallo text-nero",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "grid grid-cols-7 mb-1",
        title: "dow h-6 text-center text-sm font-medium leading-6 text-nero",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-white hover:text-nero hover:bg-giallo",
          selected: "bg-nero text-giallo hover:bg-giallo",
          disabled: "",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-nero text-gray-900",
          selected: "bg-nero text-giallo hover:bg-giallo",
          disabled: "",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-nero text-gray-900",
          selected: "bg-nero text-giallo hover:bg-giallo",
          disabled: "",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-nero text-gray-900",
          selected: "bg-nero text-giallo hover:bg-giallo",
          disabled: "",
        },
      },
    },
  },
};

export const customTheme2: CustomFlowbiteTheme["radio"] = {
  root: {
    base: "h-4 w-4 border border-ocra focus:ring-2 focus:ring-giallo focus:bg-giallo active:bg-giallo",
  },
};

export const customTheme3: CustomFlowbiteTheme["button"] = {
  base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none bg-orange-800",
  fullSized: "w-full",
  color: {},
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6",
  },
  gradient: {
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    failure:
      "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    purple:
      "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    success:
      "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
  },
  gradientDuoTone: {
    cyanToBlue:
      "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue:
      "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    pinkToOrange:
      "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    purpleToBlue:
      "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    purpleToPink:
      "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    redToYellow:
      "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    tealToLime:
      "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
  },
  inner: {
    base: "flex items-stretch items-center transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none",
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20",
    },
  },
  label:
    "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: "",
    },
    off: "",
    on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
    pill: {
      off: "rounded-md",
      on: "rounded-full",
    },
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full",
  },
  size: {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
  },
};

interface FormState {
  nome: string;
  cognome: string;
  indirizzo: string | number;
  eta: string;
  genere: string;
  email: string;
  password: string | number;
}

function Subscription() {
  const MyForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
      nome: "",
      cognome: "",
      indirizzo: "",
      eta: "",
      genere: "",
      email: "",
      password: "",
    });

    const { userData } = useUserData();

    const [submitted, setSubmitted] = useState(false);

    const validatePassword = () => {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$/;
      if (!passwordRegex.test(formState.password)) {
        alert("La password non soddisfa i requisiti.");
        return false;
      }
      return true;
    };

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const checkEmail = userData.filter(
        (el) => el.email === event.target[8].value
      );

      if (checkEmail.length != 0) {
        alert("Email linked to an existing user!");
      } else {
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

        const birthday = formatDateToYYYYMMDD(event.target[2].value);

        console.log(event.target[5].checked);

        const newUserData: UserDash = {
          email: event.target[8].value,
          first_name: event.target[0].value,
          last_name: event.target[1].value,
          birth_day: birthday,
          location: event.target[3].value,
          gender: event.target[5].checked
            ? event.target[5].value
            : event.target[6].checked
            ? event.target[6].value
            : event.target[7].value,
          password: event.target[9].value,
        };

        console.log(newUserData);

        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        });
        setSubmitted(true);
        window.location.href = "/log-in";
      }
    }

    return (
      <div className="h-screen flex justify-center items-center bg-beige-chiaro relative z-9 bg-opacity-50">
        <div className="h-50p py-8 bg-beige-scuro flex  justify-center items-center gap-6 relative z-10 rounded-md">
          <form
            className=" py-8 bg-beige-scuro flex flex-col justify-center items-center gap-6 relative z-10 rounded-md"
            onSubmit={handleFormSubmit}
          >
            <p className="text-white px-5 text-center">
              Iscriviti la nostra pagina per accedere ai nostri servizi
              esclusivi.
            </p>
            <div className="flex gap-6">
              <InputField type="text" id="Nome" name="Nome" label="Nome" />
              <InputField
                type="text"
                id="Cognome"
                name="Cognome"
                label="Cognome"
              />
            </div>
            <div className="flex gap-6 justify-center items-center align-center text-gray-400">
              <p className="pb-2 pr-14 text-white border-b-2 dark:border-white">
                Data di nascita
              </p>
              <div className="w-40">
                <Datepicker theme={{ ...customTheme, ...customTheme3 }} />
              </div>
            </div>

            <InputField
              type="text"
              id="Indirizzo"
              name="Indirizzo"
              label="Indirizzo"
            />
            <fieldset className="flex align-center max-w-md flex-row item-center gap-4 text-white">
              <legend className="mb-4 text-center">Sesso</legend>
              <div className="gap-2">
                <Radio
                  theme={customTheme2}
                  id="Maschio"
                  name="Gender"
                  value="Maschio"
                />
                <Label htmlFor="Maschio">Maschio</Label>
              </div>
              <div className="gap-2">
                <Radio
                  theme={customTheme2}
                  id="Femmina"
                  name="Gender"
                  value="Femmina"
                />
                <Label htmlFor="Femmina">Femmina</Label>
              </div>
              <div className="gap-2">
                <Radio
                  theme={customTheme2}
                  id="Altro"
                  name="Gender"
                  value="Altro"
                />
                <Label htmlFor="Altro">Altro</Label>
              </div>
            </fieldset>

            <InputField
              type="email"
              id="Email"
              name="Email"
              label="Inserisci email"
            />

            <InputField
              type="password"
              id="Password"
              name="Password"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$"
              title="La password deve contenere almeno una lettera maiuscola, una lettera minuscola, un numero e un simbolo, e deve essere lunga almeno 8 caratteri."
              label="Inserisci password"
            />

            <NormalButton type="submit" content="Sign up" />
          </form>
        </div>
      </div>
    );
  };

  return <MyForm />;
}

// usecontext per salvare le credenziali dello user  "email":"user3@example.com","first_name":"Emma","last_name":"Johnson","birth_day":"1995-03-07T23:00:00.000Z","location":"San Francisco","gender":"Female"

export default Subscription;
