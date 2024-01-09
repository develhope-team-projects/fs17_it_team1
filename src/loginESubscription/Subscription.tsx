'use client';
import { Label, Radio, Datepicker } from 'flowbite-react';
import InputField from "../shared/InputField"
import { NormalButton } from "../shared/NormalButton"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import "./Subscription.css"
import { useState } from 'react';
import axios from 'axios';


const customTheme: CustomFlowbiteTheme['datepicker'] = {

    root: {
        base: "relative",
    },
    popup: {
        root: {
            base: "absolute top-10 z-50 block pt-2",
            inline: "relative top-0 z-auto",
            inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
        },
        header: {
            base: "",
            title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
            selectors: {
                base: "flex justify-between mb-2",
                button: {
                    base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                    prev: "",
                    next: "",
                    view: ""
                }
            }
        },
        view: {
            base: "p-1"
        },
        footer: {
            base: "flex mt-2 space-x-2",
            button: {
                base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-our-black dark:hover:bg-oro-chiaro",
                clear: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-our-black dark:hover:bg-oro-chiaro"
            }
        }
    },
    views: {
        days: {
            header: {
                base: "grid grid-cols-7 mb-1",
                title: "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
            },
            items: {
                base: "grid w-64 grid-cols-7",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
                    selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        },
        months: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
                    selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        },
        years: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
                    selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        },
        decades: {
            items: {
                base: "grid w-64 grid-cols-4",
                item: {
                    base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-our-black text-gray-900",
                    selected: "bg-our-black text-oro-chiaro hover:bg-cyan-600",
                    disabled: "text-gray-500"
                }
            }
        }
    }
}

interface FormState {
    nome: string;
    cognome: string;
    indirizzo: string | number;
    eta: string;
    genere: string;
    email: string;
    password: string;
}

function Subscription() {

    const MyForm: React.FC = () => {
        const [formState, setFormState] = useState<FormState>({
            nome: '',
            cognome: '',
            indirizzo: '',
            eta: '',
            genere: '',
            email: '',
            password: '',
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormState((prevState: FormState) => ({
                ...prevState,
                [name]: value,
            }));
        };

    

        const validatePassword = () => {
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$/;
            if (!passwordRegex.test(formState.password)) {
                alert('La password non soddisfa i requisiti.');
                return false;
            }
            return true;
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            // Verifica la password prima di procedere
            if (!validatePassword()) {
                return;
            }

          

            try {
                const response = await axios.post('https://example.com/api/submit', formState);
                console.log('Risposta dal server:', response.data);
            } catch (error) {
                console.error('Errore durante l\'invio dei dati:', error);
            }
        };

        return (
            <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
                <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
                    <form onSubmit={handleSubmit}>
                        <p className="text-gray-400 px-5 text-center">Iscriviti la nostra pagina per accedere ai nostri servizi esclusivi.</p>

                        <InputField type="text" id="Nome" name="Nome" value={formState.nome} onChange={handleChange} label="Nome" />
                        <InputField type="text" id="Cognome" name="Cognome" value={formState.cognome} onChange={handleChange} label="Cognome" />

                        <div className="flex flex-col justify-start gap-2 items-start text-gray-400">
                            <p className="pl-6 text-gray-400">Data di nascita</p>
                            <div className="dateInput">
                                <Datepicker theme={customTheme} />
                            </div>
                        </div>

                        <InputField type="text" id="Indirizzo" name="Indirizzo" value={formState.indirizzo} onChange={handleChange} label="Indirizzo" />
                        <fieldset className="flex align-center max-w-md flex-row item-center gap-4 text-gray-400">
                            <legend className="mb-4 text-center">Sesso</legend>
                            <div className="gap-2">
                                <Radio id="Maschio" name="Gender" value="Maschio" onChange={handleChange} checked={formState.genere === 'Maschio'} />
                                <Label className="text-gray-400" htmlFor="Maschio">Maschio</Label>
                            </div>
                            <div className="gap-2">
                                <Radio id="Femmina" name="Gender" value="Femmina" onChange={handleChange} checked={formState.genere === 'Femmina'} />
                                <Label className="text-gray-400" htmlFor="Femmina">Femmina</Label>
                            </div>
                            <div className="gap-2">
                                <Radio id="Altro" name="Gender" value="Altro" onChange={handleChange} checked={formState.genere === 'Altro'} />
                                <Label className="text-gray-400" htmlFor="Altro">Altro</Label>
                            </div>
                        </fieldset>

                        <InputField type="email" id="Email" name="Email" value={formState.email} onChange={handleChange} label="Inserisci email" />

                        <InputField type="password" id="Password" name="Password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,}$"
                            title="La password deve contenere almeno una lettera maiuscola, una lettera minuscola, un numero e un simbolo, e deve essere lunga almeno 8 caratteri." value={formState.password} onChange={handleChange} label="Inserisci password" />

                        <NormalButton type="submit" content="Sign up" />
                    </form>
                </div>
            </div>
        );
    }

    return <MyForm />;
}

    // usecontext per salvare le credenziali dello user  "email":"user3@example.com","first_name":"Emma","last_name":"Johnson","birth_day":"1995-03-07T23:00:00.000Z","location":"San Francisco","gender":"Female"

    export default Subscription