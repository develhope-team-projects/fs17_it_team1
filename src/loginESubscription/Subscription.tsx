"use client";
import { Label, Radio, Datepicker } from "flowbite-react";
import InputField from "../shared/InputField";
import { NormalButton } from "../shared/NormalButton";
import type { CustomFlowbiteTheme } from "flowbite-react";
import "./Subscription.css";
import { useState } from "react";
import { UserDash } from "../dashboard/UsersDashboard/useUserData";
import { Link } from "react-router-dom";

const customTheme: CustomFlowbiteTheme["datepicker"] = {
  root: {
    base: "relative",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
    },
    header: {
      base: "",
      title:
        "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "flex justify-between mb-2",
        button: {
          base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
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
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today:
          "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-our-black dark:hover:bg-oro-chiaro",
        clear:
          "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-our-black dark:hover:bg-oro-chiaro",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "grid grid-cols-7 mb-1",
        title:
          "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
          selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
          selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
          selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
          selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
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

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prevState: FormState) => ({
        ...prevState,
        [name]: value,
      }));
    };

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

      console.log(event);

      const newUserData: UserDash = {
        email: event.target[8].value,
        first_name: event.target[0].value,
        last_name: event.target[1].value,
        birth_day: birthday,
        location: event.target[3].value,
        gender: event.target[5].value,
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
      return response.json();
    }

    return (
      <div className=" flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
        <div className=" py-8 bg-our-black flex  justify-center items-center gap-6 relative z-10 rounded-md">
          <form className=" py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md" onSubmit={handleFormSubmit}>
            <p className="text-gray-400 px-5 text-center">
              Iscriviti la nostra pagina per accedere ai nostri servizi
              esclusivi.
            </p>
            <div className="flex gap-6">
              <InputField
                type="text"
                id="Nome"
                name="Nome"
                value={formState.nome}
                onChange={handleChange}
                label="Nome"
              />
              <InputField
                type="text"
                id="Cognome"
                name="Cognome"
                value={formState.cognome}
                onChange={handleChange}
                label="Cognome"
              />
            </div>
            <div className="flex gap-6 justify-center items-center align-center text-gray-400">
              <p className="pb-2 pr-14 text-gray-400 border-b-2 dark:border-gray-600">Data di nascita</p>
              <div className="dateInput w-40">
                <Datepicker theme={customTheme} />
              </div>
            </div>

            <InputField
              type="text"
              id="Indirizzo"
              name="Indirizzo"
              value={formState.indirizzo}
              onChange={handleChange}
              label="Indirizzo"
            />
            <fieldset className="flex align-center max-w-md flex-row item-center gap-4 text-gray-400">
              <legend className="mb-4 text-center">Sesso</legend>
              <div className="gap-2">
                <Radio id="Maschio" name="Gender" value="Maschio" />
                <Label className="text-gray-400" htmlFor="Maschio">
                  Maschio
                </Label>
              </div>
              <div className="gap-2">
                <Radio id="Femmina" name="Gender" value="Femmina" />
                <Label className="text-gray-400" htmlFor="Femmina">
                  Femmina
                </Label>
              </div>
              <div className="gap-2">
                <Radio id="Altro" name="Gender" value="Altro" />
                <Label className="text-gray-400" htmlFor="Altro">
                  Altro
                </Label>
              </div>
            </fieldset>

            <InputField
              type="email"
              id="Email"
              name="Email"
              value={formState.email}
              onChange={handleChange}
              label="Inserisci email"
            />

            <InputField
              type="password"
              id="Password"
              name="Password"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$"
              title="La password deve contenere almeno una lettera maiuscola, una lettera minuscola, un numero e un simbolo, e deve essere lunga almeno 8 caratteri."
              value={formState.password}
              onChange={handleChange}
              label="Inserisci password"
            />

            <NormalButton type="submit" content="Sign up" />
          </form>
          {submitted && (
            <div className="text-gray-400 mt-2">
              Ora che sei iscritto puoi tornare al {" "}
              <Link to="/log-in" className="text-oro-chiaro">
                log-in
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  return <MyForm />;
}

// usecontext per salvare le credenziali dello user  "email":"user3@example.com","first_name":"Emma","last_name":"Johnson","birth_day":"1995-03-07T23:00:00.000Z","location":"San Francisco","gender":"Female"

export default Subscription;
