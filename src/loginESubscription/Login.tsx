import InputField from "../shared/InputField"
import { NormalButton } from "../shared/NormalButton"

function Login() {


    return (
        <div className="h-96 flex justify-center items-center bg-our-black relative z-9 bg-opacity-50">
            <div className="h-50p w-96 py-8 bg-our-black flex flex-col justify-center items-center gap-6 relative z-10 rounded-md">
                <InputField type="text" id="Campo1" label="Inserisci email" />
                <InputField type="password" id="Campo2" label="Inserisci password" />
                <NormalButton content="Log in" />
                <br />
                <p className="text-gray-400">Se non sei ancora iscritto <a className="text-oro-chiaro cursor-pointer">clicca qui</a></p>
            </div>
        </div>
    );

}

export default Login