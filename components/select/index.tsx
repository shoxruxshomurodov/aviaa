import ReactSelect, { components } from "react-select";
const OptionItem = (props) => {
  return (
    <components.Option {...props}>
      <div className="flex  items-center">
        {props.data.extra && <div className="mr-3">{props.data.extra}</div>}
        <div>{props.data.label}</div>
      </div>
    </components.Option>
  );
};
const Index = () => {
  return (
    <div className={"flex flex-col"}>
      <ReactSelect
        classNamePrefix="header-select"
        defaultInputValue="Uz Airways"
        classNames={{
          container: () => {
            return "!text-white !w-full";
          },
          control: (state) => {
            return "!border-none !bg-transparent !shadow-none ";
          },
          indicatorsContainer: () => "!hidden",
          input: () => {
            return "!m-0 !text-[22px] !text-white";
          },
          placeholder: () => {
            return "!m-0 !text-[22px] !text-white";
          },
          valueContainer: () => {
            return "!p-0";
          },
        }}
        components={{ OptionItem, ...components }}
      />
    </div>
  );
};

export default Index;
