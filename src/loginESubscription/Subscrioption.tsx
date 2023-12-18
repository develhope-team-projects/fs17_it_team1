import InputField from "../shared/InputField"
import { NormalButton } from "../shared/NormalButton"

function Subscription() {


    return (
        <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
            <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
                <p className="text-gray-400 px-5 text-center">Iscriviti la nostra pagina per accedere ai nostri servizi esclusivi.</p>
                <InputField type="text" id="Campo1" label="Inserisci email" />
                <InputField type="password" id="Campo2" label="Inserisci password" />
                <NormalButton content="Iscriviti e torna al log in" />
            </div>
        </div>
    );

}

export default Subscription