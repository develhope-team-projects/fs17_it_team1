'use client';
import { Label, Radio, Datepicker } from 'flowbite-react';
import InputField from "../shared/InputField"
import { NormalButton } from "../shared/NormalButton"
import type { CustomFlowbiteTheme } from 'flowbite-react';


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



function Subscription() {
    //campi subscription: località, sesso, data di nascita, nome, cognome, email, password

    return (
        <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
            <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
                <p className="text-gray-400 px-5 text-center">Iscriviti la nostra pagina per accedere ai nostri servizi esclusivi.</p>

                <InputField type="text" id="Nome" name="Nome" label="Nome" />
                <InputField type="text" id="Cognome" name="Cognome" label="Cognome" />

                <div className="flex flex-col justify-start gap-2 items-start text-gray-400">
                    <p className=" pl-6 text-gray-400">Data di nascita</p>
                    <Datepicker theme={customTheme} className="custom-datepicker-input" />
                </div>
                
                    <InputField type="text" id="Indirizzo" name="Indirizzo" label="Indirizzo" />
                    <fieldset className="flex align-center max-w-md flex-row item-center gap-4 text-gray-400">
                        <legend className="mb-4 text-center">Sesso</legend>
                        <div className="gap-2">
                            <Radio id="Maschio" name="Gender" value="Maschio" />
                            <Label className="text-gray-400" htmlFor="Maschio">Maschio</Label>
                        </div>
                        <div className="gap-2">
                            <Radio id="Femmina" name="Gender" value="Femmina" />
                            <Label className="text-gray-400" htmlFor="Femmina">Femmina</Label>
                        </div>
                    </fieldset>
                

                <InputField type="email" id="Email" name="Email" label="Inserisci email" />
                <InputField type="password" id="Password" name="Password" label="Inserisci password" />

                <NormalButton content="Sign up" />
            </div>
        </div>
    );

}

export default Subscription