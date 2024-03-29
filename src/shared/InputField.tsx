export type input = {
  className?: string;
  type: string;
  id: string;
  name?: string;
  label?: string;
  value?: string | number;
  title?: string;
  onChange?: any;
  pattern?: string;
};

export default function InputField(props: input) {
  return (
    <>
      <div className="relative z-0">
        <input
          type={props.type}
          id={props.id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-white dark:focus:border-ocra focus:outline-none focus:ring-0 focus:border-white peer"
          placeholder=" "
          value={props.value}
          onChange={props.onChange}
        />
        <label
          htmlFor={props.id}
          className="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-oro-chiaro peer-focus:dark:text-ocra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {props.label}
        </label>
      </div>
    </>
  );
}
