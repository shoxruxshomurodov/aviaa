import ReactSelect, { components } from "react-select";
const Index = ({ ...rest }) => {
  return (
    <div className={"flex flex-col min-w-[200px]"}>
      <ReactSelect
        {...rest}
        classNamePrefix="header-select"
        defaultInputValue="Uz Airways"
        classNames={{
          container: () => {
            return "!text-white !w-full";
          },
          control: (state) => {
            return "!border-none !bg-transparent !shadow-none !min-h-min";
          },
          menu: () => {
            return "mt-4 relative after:absolute after:content-[attr(after)] after:bg-white -z-1 after:-top-2 after:w-7 after:h-7 after:left-4 after:rotate-45 after:rounded-[6px]";
          },
          menuList: () => "z-20",
          singleValue: () => "!m-0 !text-[22px] !text-white",
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
      />
    </div>
  );
};

export default Index;
